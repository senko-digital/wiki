---
title: "Frequently asked questions"
description: "Replies to the most frequently asked questions about Senko Digital. Information about various plans, payment methods, DDoS protection and more."
head:
  - - meta
    - name: keywords
      content: faq, questions, hosting, payment, ddos protection, server installation, technical support, game hosting, minecraft server, garrys mod server
  - - meta
    - property: og:title 
      content: "Frequently Asked Questions | Senko Digital Wiki"
  - - meta
    - property: og:description
      content: "Replies to the most frequently asked questions about Senko Digital. Information about various plans, payment methods, DDoS protection and more."
---

# 🤔 Frequently asked questions

## 🚀 Getting Started

### 🛒 How do I order a VPS server?
Detailed instructions for ordering a VPS server are [available in this article](/client-area/vps-order).

### 🕒 How long does server setup take?
Virtual servers are set up automatically within 120 seconds after payment. In rare cases, e.g. if you have selected Windows as your OS, server installation may take up to 10 minutes, or when a plan is in very high demand, the setup process may take up to 24 hours.

Instantly available dedicated servers are automatically activated within an hour, subject to availability and the OS chosen. We always do our best to activate these as quickly as possible; however, hardware shortages or supplier delays may occasionally delay the process.

Game hosting servers typically take approximately 15 minutes to process after payment.

### 🔎 Can I test latency or check network performance before ordering?
Yes! You can use our Looking Glass at [https://lg.senko.digital](https://lg.senko.digital) to test latency, run network diagnostics, and download speed test files for each of our locations before making a purchase.

### 👤 Is there a minimum contract or commitment period?
No, all of our services are billed on a monthly basis by default, and there is no long-term commitment required. You may cancel your subscription at any time before your next renewal date.

## 🌍 Server Locations & Infrastructure

### 🌐 Where are your servers located?
Our servers are provided in three main locations: **Germany**, **Frankfurt am Main**, **Finland**, **Helsinki** and **the Netherlands**, **Amsterdam**.

### 🏢 Which data centers do you use for your servers? Are they reliable?
For our location in Germany, we utilize Firstcolo's data center facilities in Frankfurt am Main. Firstcolo is known for their powerful infrastructure and excellent connectivity within Central and Western Europe.

In Finland, while the servers are colocated in Hetzner's Helsinki facility, virtual servers are not directly exposed through Hetzner's network. Instead, we use a different upstream provider to be able to provide DDoS protection, as well as ensure optimal performance and reliability for our customers.

In the Netherlands, we utilize Skylink and Nikhef facilities.

### 📍 Can I choose the exact data center or facility?
Great question! At this time, we don't offer a granular choice of individual data centers or facilities. While our current range of locations is limited, we're steadily expanding and regularly adding more locations, while also prefering quality over quantity *wink-wink*

### 🌍 Are your services available globally?
Yes, you can order from almost anywhere in the world, subject to compliance with applicable export regulations and our own restrictions (e.g. sanctioned countries). Payment options are also available globally.

## 💻 VPS Plans & Resources

### 📈 What is the difference between your VPS lineups?
We typically offer two or three VPS lineups in each location.

- **BUDGET lineup:** Designed for small test environments, simple tasks, personal VPNs, and other workloads that are not demanding and do not require a guaranteed SLA.
- **EP lineup:** The optimal choice for a broad range of tasks, including demanding databases, Docker containers, self-hosted software, and more.
- **RZ9 lineup:** Best suited for users who need maximum single-threaded performance and significantly higher network speeds.

### ⚡ Are VPS resources dedicated or shared?
All VPS resources, such as RAM, storage, and network bandwidth are dedicated to your server. The only exception is CPU, which is provided as shared vCPU. The level of CPU share available to your VPS depends on the specific plan lineup you select, with clear details provided on our website (indicated by the tooltip next to the vCPU count for each plan).

### 📊 Can I change my plan after purchase?
Yes, you can always upgrade your server plan to a more powerful one within the same plan lineup. Plan changes are applied within a couple of minutes and do not require server reinstallation. 

If you need to migrate your server to a different location, please contact support and request the transfer, specifying both the desired location and the new plan name. Make sure the new plan provides at least as much disk space as your current server.

### 🔄 Can I downgrade my plan to a lower tier?
Currently plan downgrades are not supported. If you need to switch to a lower plan, please contact support to discuss options based on your plan, location, and storage requirements. We'll do our best to assist where possible.

### 💽 Can I add more vCPU/RAM/Storage to my existing VPS without upgrading the whole plan?
At this time, resources such as vCPU, RAM, and storage cannot be added individually to an existing VPS. Each of our plans is carefully balanced to ensure fair resource allocation and performance within our infrastructure. To increase resources, you would need to upgrade to a higher plan.

### ⚡ Can I transfer my virtual server between locations?
Yes, you can transfer your virtual server between locations on any of our VPS plans. This process requires manual assistance from our support team and is possible as long as the destination plan's disk size is equal to or larger than your current server's disk.

## 🌐 Networking & IP Addresses

### ℹ️ Do you have your own ASN?

Yes, we use our own autonomous system, [AS213520](https://as213520.net), registered with RIPE, for all VPS, dedicated server and game hosting services. This gives us full control to manage and optimize our network independently.

### ⚡ Is IPv6 supported?
Yes, all our VPS plans come with a on-link /64 IPv6 subnet by default.

### 📡 Can I buy additional IP addresses?
Yes, you can purchase up to 16 additional IPv4 addresses per VPS server. The cost is €1.5 per month for each IPv4 address. Please note that additional IPs are not available for BUDGET lineup plans due to plan limitations.

### 📡 Do you offer IP replacements?
Yes, you can request one free IPv4 address replacement per VPS server, provided you have a valid reason. Any additional replacements are reviewed on a case-by-case basis and may incur a fee of €5 per IPv4 address. This policy is in place to prevent abuse.

### 📡 Can I get a IPv6 block larger than /64 for my VPS?
Currently, it is not possible to assign IPv6 blocks larger than a /64 per VPS. However, this may become available as a paid option in the future, provided you have a valid technical reason for requiring a larger allocation.

### 🧰 Do you offer IPv6-only VPS?
At this time, we do not offer IPv6-only VPS plans. All of our current VPS offerings include both IPv4 and IPv6 connectivity by default.

If this is a feature you are interested in, please let us know - customer demand will help guide our priorities.

### 🌐 Do you offer IPv4 NAT or shared IPv4 plans?
No, all VPS come with dedicated IPv4 and IPv6 addresses. We currently do not offer NAT or shared IP plans.

### 🌐 Are any ports initially restricted on VPS servers?
To help protect our IP addresses and maintain network integrity, outbound port 25 (SMTP) is initially blocked on all VPS plans.

For the `BUDGET-1`, `BUDGET-2`, `BUDGET-3`, and `BUDGET-4` plans, these ports cannot be opened under any circumstances in any of the locations.

For all other plans, you may request the opening of ports 25 and/or 465 by submitting a support request via your client area. Please note that we will review the intended use as part of our verification process prior to approving such requests.

### 📡 Do you support rDNS / PTR records?
Yes, we support rDNS/PTR records management on all of our plans except for the BUDGET lineup. Customers can configure and update rDNS for both IPv4 and IPv6 addresses directly through our VM control panel at any time.

### 🌐 Do you provide free domain names or subdomains?
No, we do not provide free domain names or subdomains with our services.

Please note that the PTR record (the "domain" field you may see assigned to your IP addresses) is purely a technical record we automatically set on VPS server IP addresses for easier inventory management. It is not the same as an A record, which would allow a domain name to actually resolve to your server. The PTR record is primarily used when setting up your own email server, or for pure aesthetics when checking an IP address's PTR record through websites like [check-host.net](https://check-host.net).

### 🌐 Can I point my own domain to your VPS?
Yes! You can point any domain you own to our VPS and manage DNS settings via our panel or your domain registrar's control panel. We also offer DNS record management for all virtual servers except BUDGET plans.

### 🌐 Do you provide BGP sessions?
At this time, we are unable to offer BGP sessions from our AS due to current network topology constraints. However, we are actively working on adding this capability and expect to make BGP sessions available for everyone in the near future.

### 🚦 Do you throttle or limit bandwidth during peak hours?
There is no artificial throttling of bandwidth during peak hours. Your bandwidth and network performance are determined by your plan's parameters and current network conditions, as well as whether your service has went over the traffic allocation.

## 🖥️ Operating Systems & Software

### 🔧 What operating systems do you support?
We support a wide range of operating systems including:

Linux distributions:
- Debian (11 Bullseye, 12 Bookworm, 13 Trixie)
- Ubuntu (22.04 Jammy, 24.04 Noble, 26.04 Resolute)
- AlmaLinux (8, 9, 10)
- CentOS (8 Stream, 9 Stream)
- Oracle Linux (8, 9)

Other operating systems:
- Windows (10, 11, Server 2016/2022/2025)
- FreeBSD (13, 14)

We also support custom ISO uploads with up to 10 GB in size (except for BUDGET plans).

### 🖥️ Do you support Windows licensing?
We do not provide operating system licenses and are not a Microsoft partner (yet). If you wish to use Windows on your server, you must supply your own valid license (BYOL - Bring Your Own License). Our virtual and dedicated servers fully support customer-supplied Windows licenses.

### 📦 Do your VPS plans come with pre-installed software?
All VPS plans are delivered as clean installations of the operating system you choose. We do not install additional software or control panels by default, but you may install any supported software on your server after deployment.

### 🧑‍🔬 Do you support software licensing (cPanel, DirectAdmin, Plesk, etc.)?
We do not directly sell software licenses at this time. However, if you wish to use cPanel, DirectAdmin, Plesk, or other licensed software, you can bring your own license or purchase one from an authorized reseller. These panels are fully compatible with our infrastructure.

### ⚙️ What virtualization technology do you use?
All of our virtual servers use KVM (Kernel-based Virtual Machine) virtualization technology. KVM enables robust isolation between customers, ensuring strong security, reliable performance, and hardware-level virtualization features. This approach allows each VPS to function like a separate, fully independent server with its own resources.

### 🧑‍💻 Do you allow virtualization inside VPS (nested virtualization)?
At this time, nested virtualization is enabled only on our DE-RZ9 and DE-STORAGE plan lineups. This restriction exists because nested virtualization significantly increases CPU load, causes issues with live migrations, and therefore is not supported on other lineups for performance and stability reasons.

## 💾 Backups & Data Management

### 🔄 Do you offer backup services?
Yes, we provide backup solutions for all of our VPS plans. For most of the plans backups are included free of charge. Additional backup storage can be purchased separately. Find out more [here](/vps/how-to-create-a-backup).

### 🔒 Where are VM backups stored?
Our backup storage is located in a different datacenter from the VM nodes. This provides additional redundancy and helps ensure that your backups remain safe even if there is an issue at the main site.

### 💾 Can I restore backups myself?
For plans where backup snapshots are included, you can restore available backups directly from the control panel, choosing from previous recovery points as needed (excluding BUDGET plans). If you experience issues, please reach out to support.

### ❓ How long will my data be stored if my service gets suspended?
If your service is suspended due to non-payment, your server's data will be stored for up to 7 days. After this period, the server and all associated data will be automatically deleted from our systems.

### 📁 Can I request raw disk or VM images of my server?
If you need a raw disk or VM image for migration or backup, contact support. We can assist with exporting your VM image in most cases, though processing times and limitations may apply.

## 🎮 Control Panel & Management

### 🔐 What functions does the VM panel offer?
We offer a VM control panel that allows you to:
- Manage power states (start/stop/restart)
- Access console
- Monitor resource usage
- Manage DNS records
- Configure reverse DNS
- Install/reinstall OS
- Manage backups
- View network statistics

### 📋 Can I automate server management with an API?
Yes, we currently allow API access to both the Client Area and the VM control panel for automating server management and related tasks. For API documentation and detailed instructions, please contact our team, who will provide you with all the relevant information you need.

### 👨‍🔧 Can I access the server console if I lose network access?
Yes, you can access your VM's out-of-band (VNC) console via our control panel, allowing you to troubleshoot and regain access even if standard network connectivity is disrupted.

### 📝 Can I add notes or labels to my VPS in the control panel?
Yes, you can assign custom labels or notes to your VPS via the control panel for easy identification and management, especially if you have multiple servers.

### ⏸️ Can I schedule an auto-shutdown or auto-reboot for my servers?
At this time, built-in scheduling features are not included in the control panel. However, you can set up custom cron jobs or scripts directly within your server to handle automated shutdowns, reboots, and other actions as required.

### 🔄 Can I schedule automatic server reinstallations?
Automatic reinstallation scheduling is not currently available. Manual OS reinstalls can be performed anytime via the control panel.

### 🛑 Can I suspend or pause my server/service temporarily?
There is currently no built-in "pause" function for services. If you wish to suspend your service to avoid billing, you must cancel it through our support and order it again later. Back up all data before cancellation.

## 💳 Payment & Billing

### 💵 What payment methods are available?
We support more than 20 different payment methods, including debit and credit cards, such as **Visa**, **MasterCard**, and **American Express**, as well as electronic payment networks like **PayPal** and **Alipay**.

We also accept over 80 cryptocurrencies, including stablecoins and on-chain coins like **USDT**, **TON**, **Bitcoin**, **Litecoin**, **Monero**, and many others.

For a full and current list of all payment options, please visit [payment methods list](https://senko.digital/payment-methods)

### 💳 Do you support recurring/subscription payments?
Currently, we support recurring payments via PayPal only. Due to limitations with our present card and bank payment processor, recurring payments by credit or debit card are not available yet. However, we are actively working on adding additional payment methods with recurring/subscription support in the near future.

### 📆 Do you support yearly or multi-month payments?
Yes, you may choose to prepay for services for several months or a full year. When longer billing cycles are selected, discounts may be available. Please refer to the order page or contact support for current options.

### 🧾 Do you provide invoices and company details?
Yes, an invoice is generated for every payment, and includes details about the order (such as account top-ups or service purchases) and our company information. For B2B customers, invoices may need to be issued manually in certain cases.

### 🧮 Can I view and export my past invoices?
Yes, all past invoices are available in your client area for download and export. If you need special formats (PDF, CSV) or have issues accessing records, let our billing team know.

### ⏳ How long does it take to process refunds?
Refund processing times depend on the payment method. Typically, card and PayPal refunds are processed within 3-7 business days. For other payment methods, please contact our billing team for an estimate.

### 📬 Can I update my billing or contact information after ordering?
Yes, you may update your billing address, email, phone number, and other details directly from your client area at any time.

### 🧑‍💼 Can I get a custom quote or bulk discount for multiple servers?
Absolutely! If you are looking to deploy a large number of servers or have custom requirements, please contact our sales team. We offer custom quotes and potential discounts for high-volume orders. We also offer a 10% discount for half-yearly and a 15% discount for yearly payments for VPS servers.

### 👩‍💼 Can I get a non-profit or educational organization discount?
We consider requests for special rates from charitable, research, and educational institutions on a case-by-case basis. Please contact our sales team with proof of status and your project details.

### 🆓 Are there any free services or promotions available?
From time to time, we may offer promotional credits, discounts, or free trial periods for select services. Follow our socials or contact support to inquire about current promotions.

## 💬 Technical Support

### 💬 What kind of technical support do you provide?
We offer 24/7 technical support through multiple channels:
- [Ticket system](https://my.senko.digital/billmgr?startform=clientticket.edit)
- [Live chat](https://senko.digital/)
- [E-mail support](mailto:support@senko.digital)
- [Discord server](https://senko.digital/discord)
- [Telegram bot](https://t.me/senkosbot)

### 🌎 What languages does your support team speak?
Our main support language is English. Some staff members can also assist in other languages - all depending on their availability, but all official communication is in English.

### 🚧 What should I do if I encounter a billing or technical issue outside business hours?
Our support is available Monday to Saturday from 07:00 UTC to 00:00 UTC, so a reply will typically be provided during work hours.

### 🤖 Do you have a status page?
Yes! We provide a public [status page](https://senkostatus.com/) that shows real-time and historical uptime, incident history, and maintenance updates. The status page covers all of our core systems, major customer-facing services, and the underlying VM cluster nodes. You can always check it to see if there are any ongoing or past issues affecting our services. You can also subscribe to updates via email, Microsoft Teams, or Slack if you prefer.

### ⏰ What timezone does your support and billing use for deadlines and maintenance?
All maintenance windows, deadlines, and invoice due dates are usually listed in UTC, unless otherwise specified. For international customers, please check your local time against UTC.

## 🛡️ Security & DDoS Protection

### 🛡️ Do you offer any DDoS protection?
In Germany, we provide basic Layer 3 and Layer 4 DDoS protection for all services. We are actively working on expanding our protection capabilities. In the near future we will be able to offer a paid add-on for VPS servers, which will allow our customers to create custom protection rules and view attack statistics.

We also offer basic Layer 3 and Layer 4 DDoS protection in Finland and the Netherlands, however we do not have any plans on providing DDoS rule management capabilities in the near future.

### 🛡 Do you provide a DDoS protection panel?
Currently, we do not provide a dedicated DDoS protection management panel. However, we are in the process of integrating our DDoS protection solutions in our Germany location. We also plan to introduce DDoS management capabilities through our new Client Area in the near future.

### 🛡️ What security measures are in place to protect my data?
Our infrastructure is protected by state-of-the-art firewalls, regular security audits, 24/7 monitoring, and access is limited to authorized personnel only. Backup data is stored separately in secure environments to maximize safety.

### 🚨 How can I report abuse (spam, attacks, DMCA, etc.) from your IPs?
Please email your abuse reports (including all relevant logs and evidence) to [abuse@senko.digital](mailto:abuse@senko.digital). We support the [XARF](https://xarf.org/) abuse report format and strongly prefer reports to be submitted using XARF whenever possible, as it enables us to process your request more efficiently.

Our abuse team investigates each case promptly and will follow up as required by law and best practices.

### 🌩️ What happens if there is a DDoS attack on another customer?
Our DDoS protection aims to isolate malicious traffic and minimize collateral impact. While your service should remain unaffected, extreme situations may cause brief disturbances. Our team prioritizes mitigation and transparent status updates.

## 🎮 Game Hosting

### 💻 How do I access the game panel?
The game panel is available at [panel.senko.digital](https://panel.senko.digital).

Login requires:
- The email address used for your personal account registration
- Your game panel password (either set during initial server order or your existing game panel password)

If this is your first time ordering a game server and/or you do not yet have a game panel account, you will not be able to access the panel until your service is activated.

### 🧩 Are add-ons or plugins supported (Minecraft, etc.)?
Yes, for game servers like Minecraft, you may install add-ons, plugins, or modpacks of your choice through the UI in the game panel.

## 🖥️ Dedicated Servers

### 🔐 Do you offer KVM/IPMI for dedicated servers?
We do not provide 24/7 KVM or IPMI access for our instantly available dedicated servers. This applies to all dedicated server plans listed on our website, as these servers are supplied by a third-party provider who does not offer IPMI access. However, we do provide a dedicated server control panel that allows you to perform essential power operations (power on, power off, reboot) and automated OS reinstallations.

As for the custom built solutions, we are generally able to offer 24/7 IPMI access to all such servers.

### 🖥️ Do you offer remote hands or on-site assistance for dedicated servers?
Remote hands (physical server assistance) is not available for dedicated servers since all hardware is managed by our upstream providers. However, our support team can coordinate with the facility in urgent situations, but this may incur extra charges and is subject to provider's capabilities.

### 🧊 Do you provide GPU servers?
Some of our dedicated server plans offer an integrated GPU (iGPU) option. We are also planning to introduce dedicated servers with discrete GPUs in the future for customers who require additional GPU power.

## 🔄 Migration & Transfers

### 🔄 Can you migrate my server from another provider?
In most cases, yes - we can assist with migrating your server from another provider. However, the scope of migration depends on the complexity of your setup and your current plan. For BUDGET lineup plans, migration assistance is not available due to plan limitations.

Our team can securely transfer websites, Docker containers, databases, game servers and much more. If your migration involves more complex requirements, please contact our support team to discuss your specific needs and options.

### 📥 Can I import virtual machines from other providers?
In many cases, we can assist with importing VM images provided they are in a compatible format (e.g., RAW, QCOW2, etc). Reach out to support for compatibility and process guidance.

### 🏷 Can I transfer ownership of a service to another account?
Yes, ownership transfer is possible, but certain requirements must be met. Both the current and new service owners must submit requests from their respective accounts, providing the service name, and the names and email addresses of both the old and new owners.

## 📜 Policies & Terms

### 📜 Where can I find your Terms of Service and Acceptable Use Policy?
Our [Terms of Service](https://senko.digital/terms) and [Acceptable Use Policy](https://senko.digital/acceptable-use-policy) are publicly available on our website and must be reviewed before placing an order.

### 🌐 Are TOR exit nodes or crypto mining allowed on your servers?
Running public TOR exit nodes and crypto mining are not permitted, as they violate our acceptable use policy and may negatively impact network integrity and provider relations.

### 🌍 Can I use your servers for VPN, proxies, or private networking?
Yes, you may use your server for private VPNs, proxies, or tunneling, as long as usage complies with our Acceptable Use Policy and local regulations. Public or commercial VPN services may have additional requirements, and are subject to the Fair Use Policy as well. Please contact us if unsure.

## 🌟 Additional Services

### 🌐 Do you provide domain registration services?
Yes, we offer domain registration and management services for most popular TLDs (.com, .net, .org, etc.). Domain registration includes:
- Free DNS management
- WHOIS privacy protection
- Automatic renewal options

### 🧩 Do you provide managed services?
At this time, we do not offer fully managed hosting services. Our support team is happy to assist with basic hardware, software, and network-related issues, but we cannot manage your services or environments on an ongoing or ad-hoc basis.

### 🤝 Do you offer partnership or reseller programs?
We welcome partnership and reseller inquiries! If you are interested in becoming a value-added reseller or establishing a business partnership, please contact our sales department for details and available benefits.

### 🌐 Do you have an affiliate program?
Yes, we offer an affiliate program that allows you to earn commission for referring customers to Senko Digital. Reach out to support or check the [referral program](https://senko.digital/referral) page on our website for more details.

### 🌈 Can I request a feature or suggest an improvement?
Yes, we welcome all customer feedback! If there's a feature you'd like to see or an improvement you wish to suggest, please contact us via support or our community channels. Customer feedback influences our roadmap by a lot.

### 📰 Do you announce new features or updates?
Yes, we publicize new features, releases, and policy changes via our socials, as well as our email netwsletter. For critical updates, registered customers receive email notifications directly.

## 📊 SLA & Maintenance

### 📜 Do you have an SLA uptime guarantee?
Our VPS servers and game hosting come with a guaranteed uptime of 99.9% per month, excluding planned maintenance and Force Majeure events. 

If we fail to meet this SLA, you will receive compensation for unscheduled downtime in the form of a service extension equal to double the duration of the downtime.

### 📅 Do you perform scheduled maintenance?
Yes, we occasionally perform scheduled maintenance to improve our services or address underlying issues. When maintenance is planned, we notify affected customers in advance and post updates on our [status page](https://senkostatus.com/). You can also subscribe to receive all maintenance updates via email, Microsoft Teams, or Slack.

### 🧑‍🔧 What happens if hardware fails?
In case of any hardware failure or issues affecting your VPS or dedicated server, our team will be able to proactively migrate your services to healthy hardware with as little downtime per your request, whenever it is possible. Critical infrastructure has redundancy to minimize impact.

## 😊 Didn't find your question?
If you didn't find the answer to your question here, please reach out to our support team! We're happy to help via ticket, chat or email.
