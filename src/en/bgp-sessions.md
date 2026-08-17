---
title: "BGP Sessions"
description: "Everything about BGP sessions at Senko Digital: which services they're available on, the requirements for your prefixes and ASN, DDoS protection options and how to order a session."
head:
  - - meta
    - name: keywords
      content: bgp, bgp session, prefix announcement, ASN, AS213520, RPKI, ROA, LOA, IRR, route object, ddos protection, vps, dedicated server, Senko Digital
  - - meta
    - property: og:title
      content: "BGP Sessions | Senko Digital"
  - - meta
    - property: og:description
      content: "Everything about BGP sessions at Senko Digital: which services they're available on, the requirements for your prefixes and ASN, DDoS protection options and how to order a session."
---

# BGP Sessions

At Senko Digital we can set up a BGP session for your server, so you're free to announce your own prefixes through our network. Your address space stays entirely yours - you keep full control over it, and nothing stops you from announcing it through other providers at the same time.

## Availability and Pricing

### Where are BGP sessions available?
In our Germany location, BGP is available only for:

- **Virtual servers** - on every plan except the DE-BUDGET lineup ([lineup limitations](/vps/budget-lineup-limitations)).
- **Dedicated servers** - only on machines built through the configurator in the Client Area. The plans [listed on our website](https://senko.digital/dedicated-servers) are not eligible.

BGP sessions are not yet available in Finland or the Netherlands.

### How much does it cost?
There's a one-off setup fee of **10 EUR** for virtual servers. For dedicated servers the setup fee is waived. The session itself carries no monthly charge. The only recurring cost is DDoS protection, and only if you order it: **20 EUR per month per IPv4 prefix**.

### Does traffic over announced prefixes count towards my plan's traffic?
Yes. Everything you push through the session counts against the traffic allowance included with your server, exactly the same way traffic to and from the server's own IPs does.

## Requirements

### Do I need my own ASN?
Yes - there's no way around this one. We can't announce prefixes on your behalf from under our own ASN.

### What if I don't have an ASN yet?
We can sort that out for you - Senko Digital is a RIPE NCC member, so you can register your own ASN through us instead of going elsewhere for it. Have a look at our [LIR services](https://senko.digital/lir-services) page for the details.

### Which prefixes can I announce?
Only prefixes that are actually under your control, and that you can prove you're authorized to use. Address space leased from somewhere without the paperwork and registry objects to back it up won't be accepted.

### Do you check the reputation of the ASN and prefixes?
We do. Neither your autonomous system nor the prefixes you're planning to announce should have active listings on public blocklists and reputation services - [Spamhaus](https://www.spamhaus.org/), [AbuseIPDB](https://www.abuseipdb.com/), [Netcraft](https://www.netcraft.com/) and the like. If something is listed, we'll need it cleared before the session can go up.

### Are there restrictions on what I can host in the announced networks?
Your prefixes and everything you host in them fall under our [Terms of Service](https://senko.digital/terms) and [Acceptable Use Policy](https://senko.digital/acceptable-use-policy), same as any other service with us. Anything that breaks those rules isn't allowed, and we'll shut the session down if we find it. Using the session as transit for someone else's networks isn't allowed either.

### How many prefixes can I announce?
Up to **16 IPv4 prefixes** and **16 IPv6 prefixes** per session. More can be added per request through our support.

### What records do I need?
- **route / route6 objects** in an IRR or the relevant RIR database, with your ASN as the origin;
- **ROAs** for every prefix you intend to announce.

Without these objects in place your announcements still get rejected further down the line by our upstreams and the IXPs.

### Do you validate RPKI?
Yes - every announcement we receive from customers is checked, and anything that comes back `invalid` gets dropped.

### Do you support BGP communities and blackholing?
Not at the moment - we offer neither communities nor blackhole announcements today. Both are on our roadmap and should arrive in the near future.

## DDoS Protection

### Is protection included with a BGP session?
It isn't - announced prefixes aren't covered by default. You can add it as a paid option for **20 EUR per month per IPv4 prefix**, and it's easiest to ask for it in the same ticket as the session itself.

### What happens to my prefixes without it?
That's up to you - just tell us which of the two modes you'd like:

- **filtering fully disabled** - traffic passes through without any processing;
- **basic L3-L4 filtering** - simple rules at the network and transport layers.

::: warning Please note
Basic L3-L4 filtering can get in the way of L7 applications - web services and APIs that handle a lot of legitimate connections, for example. Keep that in mind before choosing it.
:::

### Can I manage the protection rules myself?
Not yet - for now our team makes the changes for you, just ask in a ticket. Rule management for customer prefixes is coming to the new Client Area once it's out.

## Ordering

### How do I request a BGP session?
Drop us a ticket to the **Technical department** in the [Client Area](https://my.senko.digital/billmgr?startform=clientticket.edit) - [this article](/client-area/new-ticket) walks you through creating one. We'll ask for whatever details are missing, agree the parameters with you and get the session set up.

You'll save yourself a round trip by including the following right away:

- your **ASN**;
- the **list of prefixes** to announce (IPv4 and/or IPv6);
- the **name and ID of the service** the session is for;
- whether you want the **paid DDoS protection**, or which mode your prefixes should run in without it.

---

Still have questions about the requirements or the setup? Get in touch with our [support team](https://senko.digital/contacts) - we'll help you work out the best option for your use case.
