# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version       | Supported          |
| -------       | ------------------ |
| v0.1.5        |      Yes           |
| v0.1.0-alpha  | Alpha Testing      |


## Reporting a Vulnerability

You will receive a response from us within 2 working days. If the issue is confirmed, we will release a patch as soon as possible depending on complexity but historically within a few days.

Please avoid opening public issues on GitHub that contain information about a potential security vulnerability as this makes it difficult to reduce the impact and harm of valid security issues.

## Coordinated Vulnerability Disclosure Policy

We ask security researchers to keep vulnerabilities and communications around vulnerability submissions private and confidential until a patch is developed. In addition to this, we ask that you:

- Allow us a reasonable amount of time to correct or address security vulnerabilities.
- Avoid exploiting any vulnerabilities that you discover.
- Demonstrate good faith by not disrupting or degrading services built on top of this software.

## Vulnerability Disclosure Process

Octobear uses the following disclosure process for the various Octobear-related repos:

- Once a security report is received, the core development team works to verify the issue.
- Patches are prepared for eligible releases in private repositories.
- We notify the community that a security release is coming, to give users time to prepare their systems for the update.
  - The notification contains the release date and time (72-24 hours after the notification).
  - The notification contains as little information as possible, to make it hard for attackers to guess where to search. However, depending on the situation it may contain additional information such as whether the patch will be consensus breaking, or if chains with permissioned Octobear integration are equally affected as permissionless chains.
- The fixes are applied publicly and new releases are issued.
- Once releases are available, we notify the community, again, through the same channels as above.
- Once the patches have been properly rolled out and no earlier than 7 days after the release, we will publish a post with further details on the vulnerability as well as our response to it.
- Note that we are working on a concept for bug bounties and they are not currently available.

This process can take some time. Every effort will be made to handle the bug as quickly and thoroughly as possible. However, it's important that we follow the process described above to ensure that disclosures are handled consistently and to keep this codebase and the projects that depend on them secure.
