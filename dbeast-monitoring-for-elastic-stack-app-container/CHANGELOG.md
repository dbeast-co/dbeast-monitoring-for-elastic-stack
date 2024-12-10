# Changelog

## Version 1.0.2

- Features:
  * [FEAT] Add Flow parameters to the Logstash Host Overview dashboard #185[#185](https://github.com/dbeast-co/dbeast-monitor/issues/185)
  * [FEAT] Define all Date histogram graphs "Max data points" #186[#186](https://github.com/dbeast-co/dbeast-monitor/issues/186)

- Updated dashboards
  * All dashboards

## Version 1.0.1

- Features:
  * [FEAT] In the "Cluster list" dashboard - redevelope monitors links to route even if the cluster not received the status #160[#44](https://github.com/dbeast-co/dbeast-monitor/issues/44)
  * [FEAT] Add node roles to the "Host overview" dashboard #68[#68](https://github.com/dbeast-co/dbeast-monitor/issues/68)
  * [FEAT] Remove data from the "Tier stats" in case of the tier doesn't exists #156[#156](https://github.com/dbeast-co/dbeast-monitor/issues/156)

- Bug fixes
  * [BUG] There is no docs.deleted mapping in the on-prem version #167[#167](https://github.com/dbeast-co/dbeast-monitor/issues/167)
  * [BUG] In the "Stack monitor" dashboard "Tier" panels, there is an error in case of the flat architecture #166[#166](https://github.com/dbeast-co/dbeast-monitor/issues/166)
  
- Updated dashboards
  * Elastic stack monitor
  * Host overview
  * Elasticsearch shards overview 
  * Elasticsearch index pattern monitor

## Version 1.0.0
**We released the first version for Kubernetes with Helm charts! Now we have Kubernetes and on-prem versions!**

- Features:
  * [FEAT] Kubernetes image development #44[#44](https://github.com/dbeast-co/dbeast-monitor/issues/44)
  * [FEAT] Add storage and memory per tier status in the "Stack monitoring" dashboard #65[#65](https://github.com/dbeast-co/dbeast-monitor/issues/65)
  * [FEAT] Add deleted docs in the "Index status" #148[#148](https://github.com/dbeast-co/dbeast-monitor/issues/148)
  * [FEAT] Logstash index stats pipeline - add docs.deleted rates #133[#133](https://github.com/dbeast-co/dbeast-monitor/issues/133)
  * [FEAT] Logstash logs pipeline optimization #46[#46](https://github.com/dbeast-co/dbeast-monitor/issues/46)
  * [FEAT] Add storage and memory per tier status in the "Stack monitoring" dashboard #65[#65](https://github.com/dbeast-co/dbeast-monitor/issues/65)

- Bug fixes
  * [BUG] Incorrect avg shard size in the "Index pattern monitor" dashboard #147[#147](https://github.com/dbeast-co/dbeast-monitor/issues/147)
  * [BUG] In the index summary there is no ingest rate data in case of the index closed #144[#144](https://github.com/dbeast-co/dbeast-monitor/issues/144)
  * [BUG] In the Thread pools mapping change fields type from the integer to the long #138[#138](https://github.com/dbeast-co/dbeast-monitor/issues/138)
  * [BUG] Incorrect rollover alias in the new index definition #137[#137](https://github.com/dbeast-co/dbeast-monitor/issues/137)

- Updated dashboards
  * Elastic stack monitor
  * Logstash overview
  * Logstash instance monitor
  * Logstash pipeline analytics
  * Elasticsearch index monitor

## Version 0.8.1
- Bug fixes
  * [BUG] Incorrect elasticsearch.tasks.running_time mapping in the Tasks mapping #109[#109](https://github.com/dbeast-co/dbeast-monitor/issues/109)
  * [BUG] Incorrect definition of the host.hostname in the Logstash logs pipeline #110[#110](https://github.com/dbeast-co/dbeast-monitor/issues/110)
  * [BUG] In the "Add new cluster" panel The logstash "Download" button don't work in case of the two or more Logstashes #111[#37](https://github.com/dbeast-co/dbeast-monitor/issues/111)

- Features:
  * [FEAT] Add corrupted data index for the TSDS Logstash configurations #112[#112](https://github.com/dbeast-co/dbeast-monitor/issues/112)

## Version 0.8.0
* All data sources have been updated to use aliases, directing them to Data Streams, TSDS, or Indexes.
* Note: There is no backward compatibility with the previous version.
* The minimum required version for the monitoring cluster is now 8.7. (Production clusters can still operate on older versions.)

- Features:
  * Application installer [#37](https://github.com/dbeast-co/dbeast-monitor/issues/37)
    Developed configurations downloader
  * [FEAT] Metric indices to the TSDS migration [#84](https://github.com/dbeast-co/dbeast-monitor/issues/84)
  * [FEAT] Add ILM policies for all Index templates [#32](https://github.com/dbeast-co/dbeast-monitor/issues/32)
  * [FIX] Fix API requests in the "Cluster list"[#23](https://github.com/dbeast-co/dbeast-monitor/issues/23)
  * [FEAT] In the "Tasks API" flow fix running time units [#92](https://github.com/dbeast-co/dbeast-monitor/issues/92)
  * [FEAT] Logstash "Elasticsearch tasks" pipeline - Add ESQL tasks parsing [#73](https://github.com/dbeast-co/dbeast-monitor/issues/73)

- Bug fixes
  * [BUG] Backend remove special chars from the cluster name [#100](https://github.com/dbeast-co/dbeast-monitor/issues/100)
  * [BUG] In the Add new cluster panel, the "Kibana host" field is supposed to be not required [#90](https://github.com/dbeast-co/dbeast-monitor/issues/90)

- Updated dashboards
  All dashboards updates to the aliases usage

## Version 0.7.1
- Bug fixes
  * Logstash Thread pools pipeline - parsing exception [#67](https://github.com/dbeast-co/dbeast-monitor/issues/67)
  * Application can't connect to the clusters without TLS [#64](https://github.com/dbeast-co/dbeast-monitor/issues/64)
  * Error in click to the "DBeast Monitor" In the Grafana[#61](https://github.com/dbeast-co/dbeast-monitor/issues/61)

- Features
  * Move Data source templates to the backend part  [#66](https://github.com/dbeast-co/dbeast-monitor/issues/66)
  * Logstash "elasticsearch-ingest-pipeline" Optimization  [#49](https://github.com/dbeast-co/dbeast-monitor/issues/49)

- Updated dashboards
  * Elasticsearch ingest pipeline overview
  * Elasticsearch ingest pipeline analytics
  * Elastic stack monitor

## Version 0.7.0
- Bug fixes
  * Incorrect Aggregation of Pipeline Data in Logstash Overview Dashboard [#48](https://github.com/dbeast-co/dbeast-monitor/issues/48)

- New data sources:
  * Elasticsearch Tasks API datasource

- New dashboards:
  * Elasticsearch Tasks analytics

- Features
  * The backend component moved to the Grafana plugin

- Updated dashboards
  * Elasticsearch host overview
  * Elasticsearch index monitor
  * Elastic stack monitor
  * Logstash instance monitor
  * Logstash overview

## Version 0.6.1
- Bug fixes
  * Incorrect host definition in the logstash-logs configuration file [#43](https://github.com/dbeast-co/dbeast-monitor/issues/43)

## Version 0.6.0
- New data sources:
  * Thread pools datasource

- Updated dashboards
  * Elasticsearch host overview
  * Elasticsearch ingest pipelines overview
  * Elasticsearch ingest pipeline analytics
  * Elasticsearch index monitor
  * Elasticsearch index patterns monitor
  * Elastic stack monitor
  * Logstash instance monitor
  * Logstash overview
  * Logstash pipeline analytics
  * Elasticsearch shard level monitor

## Version 0.5.1
- Fixed bug in the Logstash logs and metrics configuration files


## Version 0.5.0
- New data sources:
  * Metricbeat + Monitoring datasource
  * Logs datasource
  * Elasticsearch Ingest pipeline datasource

- New dashboards:
  * Elasticsearch host overview
  * Elasticsearch ingest pipelines overview
  * Elasticsearch ingest pipeline analytics
  * Elasticsearch index monitor
  * Elasticsearch index patterns monitor

- Updated dashboards
  * Elastic stack monitor
  * Logstash instance monitor
  * Logstash overview
  * Logstash pipeline analytics
  * Elasticsearch shard level monitor


- Name conventions update


## Version 0.4.0-RC

Initial release.