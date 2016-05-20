# Awesome DevSecOps   [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Inspired by the awesome-* trend on GitHub. This is a collection of documents, presentations, videos, training materials, tools, services and general leadership that support the DevSecOps mission.  These are the essential building blocks and tidbits that can help you to arrange for a DevSecOps experiment or to help you build out your own DevSecOps program.

This list will not be fully comprehensive and will change as DevSecOps matures.  We intend for it to be an awesome list that grows and changes as the community learns and improves how DevSecOps is implemented and adopted.  To be included in this list, the information, tools, vendors or initiative must provide for Free or Open Source capabilities that help with the DevSecOps mission.  Links that lead to a commercial aspect are noted with a (P).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Information](#information)
  - [Presentations](#presentations)
  - [Initiatives](#initiatives)
  - [Conferences](#conferences)
  - [Training](#training)
  - [Podcasts](#podcasts)
- [Tools](#tools)
  - [Dashboards](#dashboards)
  - [Automation](#automation)
  - [Hunting](#hunting)
  - [Testing](#testing)
  - [Alerting](#alerting)
  - [Threat Intelligence](#threat-intelligence)
  - [Attack Modeling](#attack-modeling)
  - [Secret Management](#secret-management)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Information
We've been working across the industry to learn more about the different types of DevOps + Security initiatives.  This collection has been pulled together and includes: Podcasts, Videos, Presentations, and other Media to help you learn more about DevSecOps, SecDevOps, DevOpsSec, and/or DevOps + Security.

## Presentations
Many talks are now targeting the change of adding Security into the DevOps environment.  We've added some of the most notable ones here.    

* [Veracode's Defending the Cloud from a Full Stack Hack](https://www.rsaconference.com/writable/presentations/file_upload/csv-w03-_defending-the-cloud-from-the-full-stack-hack.pdf)

## Initiatives
There are a variety of initiatives underway to migrate security and compliance into DevOps.  We've included links for active projects here:

* [Compliance at Velocity (CATV)](https://github.com/dromologue/CATV)
* [Rugged DevOps](http://www.ruggedsoftware.org)
* [AWS Labs](https://github.com/awslabs)

## Conferences
A body of knowledge for combining DevOps and Security has been delivered via conferences and meetups.  This is a short list of the venues that have dedicated a portion of their agenda to it.

* [AWS re:Invent](https://reinvent.awsevents.com)
* [RSA Conference](http://www.rsaconference.com)
* [Goto Conference](http://gotocon.com)
* [DevSecCon](http://devseccon.com)
* [ISACA Ireland](http://www.isaca.org/chapters5/Ireland/conference/pages/Agenda.aspx)

## Training
DevSecOps requires an appetite for learning and agility in acquiring new skills.  We've collected these links to help you learn how to do DevSecOps with us.

* [Pentester Lab](https://pentesterlab.com/exercises/)
* [Infoseclabs](http://www.infoseclabs.net)
* [Vulnhub](https://www.vulnhub.com/)
* [Mutillidae](http://www.irongeek.com/i.php?page=mutillidae/mutillidae-deliberately-vulnerable-php-owasp-top-10)
* [Metasploitable](https://community.rapid7.com/docs/DOC-1875)

## Podcasts
A small collection of DevOps and Security podcasts.

* [Social Engineering Podcast](http://www.social-engineer.org/category/podcast/)
* [Trusted Sec Podcast](https://www.trustedsec.com/podcast/)
* [Defensive Security Podcast](http://www.defensivesecurity.org/)
* [Brakeing Down Security Podcast](http://www.brakeingsecurity.com/)
* [Tenable Security Podcast](http://www.tenable.com/podcast)
* [Down The Security Rabbithole](http://podcast.wh1t3rabbit.net/)
* [OWASP 24/7](https://www.owasp.org/index.php/OWASP_Podcast)
* [Take 1 Security Podcast](https://danielmiessler.com/podcast/)
* [Arrested DevOps](https://www.arresteddevops.com/)
* [DevOps Cafe](http://devopscafe.org/)
* [Food Fight Show](http://foodfightshow.org/)
* [The Ship Show](http://theshipshow.com/)

# Tools
This collection of tools are useful in establishing a DevSecOps platform.  We have divided the tools into several categories that help with the different divisions of DevSecOps.

## Dashboards
Visualization is an important element of identifying, sharing and evolving the security information that passes from the beginning of the creative process through to operations.

* [Kibana](https://www.elastic.co/products/kibana)

## Automation
Automation platforms have an advantage of providing for scripted remediation when security defects are surfaced.

* [StackStorm](https://github.com/StackStorm/st2)

## Hunting
This list of tools provide the capabilities necessary for finding security anomalies and identifying rules that should be automated and extended to support scale demands.

* [Mirador](http://fathom.info/mirador/)

## Testing
Testing is an essential element of a DevSecOps program because it helps to prepare teams for Rugged operations and to determine security defects before they can be exploited.

* [Gauntlt](http://gauntlt.org/)

## Alerting
Once you discover something important, response time is critical and essential to the Incident Response required to remediate a security defect.  These links include some of the projects that provide for Alerting and Notifications.

* [Elastalert](https://github.com/yelp/elastalert)

## Threat Intelligence
There are many sources for Threat Intelligence in the world.  Some of these come from IP Intelligence and others from Malware repositories.  This category contains tools that are useful in capturing threat intelligence and collating it.

* [OpenTPX](https://www.opentpx.org)
* [Passive Total](https://www.passivetotal.org)

## Attack Modeling
DevSecOps requires a common attack modeling capability that can be done at speed and scale.  Thankfully there are efforts underway to create these useful taxonomies that help us operationalize attack modeling and defenses.

* [CAPEC](https://capec.mitre.org)

## Secret Management
To support security as code, sensitive credentials and secrets need to be managed, security, maintained and rotated using automation.  The projects below provide DevOps teams with some good options for securing sensitive details used in building and deploying full stack software deployments.

* [Vault](https://www.hashicorp.com/blog/vault.html)
* [BlackBox](https://github.com/StackExchange/blackbox)
* [Transcrypt](https://github.com/elasticdog/transcrypt)
