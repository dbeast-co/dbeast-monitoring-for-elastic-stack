import React from 'react';
import {Button, Legend, useStyles2} from '@grafana/ui';
import {AppPluginMeta, GrafanaTheme2, PluginConfigPageProps, PluginMeta} from '@grafana/data';
import {getBackendSrv} from '@grafana/runtime';
import {css} from '@emotion/css';
import {lastValueFrom} from 'rxjs';
import {Project} from '../../panels/dbeast-add_new_es_cluster-panel/models/project';
import PasswordDialog from './password-dialog';
import "./AppConfig.scss"

export type AppPluginSettings = {};

export interface AppConfigProps extends PluginConfigPageProps<AppPluginMeta<AppPluginSettings>> {
}

export const AppConfig = ({plugin}: AppConfigProps) => {
    const s = useStyles2(getStyles);
    const {enabled, jsonData} = plugin.meta;

    const [_, setUniqProjects] = React.useState<Project[]>([]);

    const [showDialog, setShowDialog] = React.useState(false);

    const [project, setProject] = React.useState<Project>({
        host: "",
        authentication_enabled: false,
        username: "",
        status: "",
        password: ""
    });
    const settings = require('../../panels/dbeast-add_new_es_cluster-panel/config.ts');


    const onUpgradeAll = async () => {
        const datasources = await getBackendSrv()
            .get('/api/datasources')
            .then((dataSources: any[]) => {
                console.log("Not filtered datasources", dataSources);

                const regex = /^Elasticsearch-direct-mon--(?!monitoring).*$/;
                return dataSources.filter((dataSource: any) => {
                    return dataSource.uid.match(regex);
                });
            });


        console.log("filtered datasources", datasources);

        const uniqueProjects: Project[] = [];
        const urlSet = new Set<string>();

        datasources.forEach((dataSource: any) => {
            const {url, basicAuthUser, basicAuth} = dataSource;


            // Check if the URL is already processed
            if (!urlSet.has(url)) {
                urlSet.add(url); // Add URL to the Set to track uniqueness

                const newObject: Project = {
                    host: url,
                    authentication_enabled: basicAuth,
                    username: basicAuthUser,
                    status: "",
                    password: ""
                };
                setProject(newObject);

                uniqueProjects.push(newObject);
                setShowDialog(true);
                // Add the new Project object to the array

            }
        });
        setUniqProjects(uniqueProjects);

        //TODO: Convert to JSON
        //TODO: Over forEach Take property "url" and "basicAuthUser" and "basicAuth" create new object like Project where url = host ,basicAuth = authentication_enabled, basicAuthUser = username.If there's same url in the array, then skip it to create new object.

        //TODO: Create dialog for each object to ask for password (url,username and password where url and username take from the object) check if there's authentication_enabled = true, then ask for password and show username and url.

        //TODO: If  authentication_enabled = true, username and password required.
        //TODO: On click on "Upgrade" button, send the object to the backend '/update_cluster' endpoint.
        //TODO: Add spinner while upgrading and only after success upgrade show another dialog for next object.
        //TODO: Add another button "Skip" to skip to next object in array


    };

    const onUpgrade = async (project: Project) => {
        console.log("Project to Upgrade", project);
        const baseUrl = settings.SERVER_URL;
        const response = await getBackendSrv().post(`${baseUrl}/update_cluster`, JSON.stringify(project));
        console.log('Cluster updated successfully:', response);


        setShowDialog(false);
    };
    const onCloseDialog = () => {
        setShowDialog(false);
    }
    const onSkip = () => {
        console.log("Skip");
    }
    return <div className="gf-form-group">
        <div>
            {/* Enable the plugin */}

            <Legend>Enable / Disable</Legend>
            {!enabled && <>
                <div className={s.colorWeak}>The plugin is currently not enabled.</div>
                <Button
                    className={s.marginTop}
                    variant="primary"
                    onClick={() =>
                        updatePluginAndReload(plugin.meta.id, {
                            enabled: true,
                            pinned: true,
                            jsonData,
                        })
                    }
                >
                    Enable plugin
                </Button>


            </>}

            {/*Source connection*/}

            <div className="actions">
                <Button variant="primary" onClick={() => onUpgradeAll()}>Upgrade all</Button>
            </div>


            {showDialog && <PasswordDialog handleSkip={onSkip} handleClose={onCloseDialog} project={project}
                                           handleUpgrade={(project) => onUpgrade(project)}/>}


            {/* Disable the plugin */}
            {enabled && <>
                <div className={s.colorWeak}>The plugin is currently enabled.</div>
                <Button
                    className={s.marginTop}
                    variant="destructive"
                    onClick={() =>
                        updatePluginAndReload(plugin.meta.id, {
                            enabled: false,
                            pinned: false,
                            jsonData,
                        })
                    }
                >
                    Disable plugin
                </Button>

            </>}
        </div>
    </div>;
};

const getStyles = (theme: GrafanaTheme2) => ({
    colorWeak: css`
        color: ${theme.colors.text.secondary};
    `,
    marginTop: css`
        margin-top: ${theme.spacing(3)};
    `,
});

const updatePluginAndReload = async (pluginId: string, data: Partial<PluginMeta>) => {
    try {
        await updatePlugin(pluginId, data);
        window.location.reload();
    } catch (e) {
        console.error('Error while updating the plugin', e);
    }
};

export const updatePlugin = async (pluginId: string, data: Partial<PluginMeta>) => {
    const response = getBackendSrv().fetch({
        url: `/api/plugins/${pluginId}/settings`,
        method: 'POST',
        data,
    });
    return lastValueFrom(response);
};
