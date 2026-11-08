---
title: "Getting Started with DNS Hosting"
description: "How to set up DNS records for your domain in the DNSmanager panel on Senko Digital nameservers - from delegating the domain to creating records of any type."
head:
  - - meta
    - name: keywords
      content: dns, dns hosting, dnsmanager, dns records, domain delegation, nameservers, ns1, ns2, A record, MX, CNAME, TXT, Senko Digital
  - - meta
    - property: og:title
      content: "DNS Hosting - Getting Started with DNSmanager at Senko Digital"
  - - meta
    - property: og:description
      content: "How to set up DNS records for your domain in the DNSmanager panel on Senko Digital nameservers - from delegating the domain to creating records of any type."
---

# Getting Started with DNS Hosting

For your site to open by domain name and your email to reach the right inboxes, the domain needs to be "linked" to a server - that's exactly what DNS records are for. They translate human-readable names like `example.com` into the IP address of the server where your project lives.

In this guide we'll walk through how to delegate a domain to our nameservers and manage DNS records through the **DNSmanager** panel at Senko Digital.

---

## What You'll Need

Before getting started, make sure you have everything in place:

- **A domain name** (`.com`, `.org`, `.net` or any other) - if you don't have one yet, you can [register one with us](https://senko.digital/domains)
- **Your server's IP address** - if you want to point a website or other service to it
- **Access to DNSmanager** - login details are sent in the DNS hosting service activation email

::: tip
DNSmanager is available free of charge to every customer - even those without active services.
:::

## Delegating Your Domain to Our Nameservers

First add the domain and its records to DNSmanager using the steps below, then change the nameservers at your registrar. If you are moving an existing domain, copy all records you still need, including mail and verification records, before changing the nameservers. The new records become publicly available after delegation takes effect.

Set the following nameservers at your domain registrar:

```text
ns1.senkodns.net
ns2.senkodns.net
```

Where exactly to change the NS depends on the registrar. If your domain is registered with us, delegation is configured in the domain settings inside your client area. If it's with a third-party registrar - look for a section called **"Nameservers"**, **"NS servers"** or **"DNS servers"** in their domain management panel.

::: warning Important
After changing nameservers, the changes don't propagate instantly - it can take **up to 72 hours**. Most of the time the domain starts working much sooner, usually within a few hours.
:::

## Logging into DNSmanager

1. Open [https://dns.senko.digital](https://dns.senko.digital) in your browser.
2. Enter the **login** and **password** from your DNS hosting activation email.
3. Click **"Log in"**.

After signing in you'll land on the DNSmanager home page - that's where we'll be managing domains.

## Adding a Domain to DNSmanager

Delegation is only half the job. For our nameservers to actually start handling requests for your domain, you also need to add it to the panel itself.

1. Go to **"Main" → "Domain names"**.
2. Click the **"Create"** button at the top of the window.
3. Fill in the form:

   - **Type** - make sure to choose `master`. Without this, the records won't work.
   - **Name** - your domain name (for example, `example.com`).
   - **IP address** - the IP of the server where your site is hosted (or will be hosted).
   - **Administrator email** - a contact address for the domain administrator, usually your personal email.

4. Click **"Ok"** to save.

If everything went through, the domain will show up in the **"Domain names"** list, and DNSmanager will automatically create the standard set of base records for it (`SOA`, `NS`, `A`).

::: tip
Check the automatically created records and add any records your site and email need. Then change the nameservers at your registrar. Cached records may continue to be used until their TTL expires.
:::

## Managing DNS Records

To view or edit records for an existing domain:

1. Open **"Main" → "Domain names"**.
2. Select the domain in the list.
3. Click the **"Records"** button in the top toolbar.

The window that opens will show all records for the selected domain. The **"Create"**, **"Edit"** and **"Delete"** buttons are used to edit the DNS zone.

### Example: Creating an A Record for a Subdomain

Let's walk through adding an A record for the subdomain `server.example.com` so it points to the right IP.

1. In the records window, click **"Create"**.
2. Fill in the fields:

   - **Name** - the subdomain name. You can simply enter `server` (the domain name will be appended automatically) or `server.example.com.` in full - but in that case **make sure to include the trailing dot**.
   - **TTL** - record time to live. Leave the default value if you don't know what to set it to.
   - **Type** - select `A`.
   - **IP address** - the IP this record should point to.

3. Click **"Ok"**.

::: warning Important
The trailing dot at the end of a fully qualified domain name isn't a typo - it's an important detail of DNS syntax. Without it the panel will append the domain name to your record again, and instead of `server.example.com` you'll get `server.example.com.example.com`.
:::

After saving, the new record will appear in the list. That's it - the subdomain will start resolving as soon as the DNS cache updates.

## DNS Record Types

The principle behind creating any record is the same - only the fields you fill in differ. Here are the most common record types and what they're for:

| Type      | What it's for                                                                  |
| --------- | ------------------------------------------------------------------------------ |
| **A**     | Points a domain or subdomain at an IPv4 address.                               |
| **AAAA**  | Same as A, but for IPv6 addresses.                                             |
| **CNAME** | Alias - declares one domain as a "pseudonym" of another.                       |
| **MX**    | Mail routing - which server should receive email for your domain.              |
| **TXT**   | Plain text. Commonly used for SPF, DKIM, DMARC and verification with various services (e.g. Google Workspace). |
| **CAA**   | Specifies which certificate authorities are allowed to issue SSL certs.        |
| **NS**    | Delegates a subdomain to its own nameservers.                                  |
| **SRV**   | Used by certain services (Matrix, XMPP, Minecraft and others).                 |

::: tip
If a freshly added domain still isn't opening - that's perfectly normal. Wait a bit and try again. For domains that are already set up, new records usually propagate much faster than the very first delegation.
:::

A CNAME record cannot share its name with A, AAAA, MX, or TXT records. For example, choose either a CNAME or an A/AAAA record for `www`.

## What to Do If Nothing Works

If after all the setup the domain or subdomain still won't open, the issue is most often one of the following:

- **NS servers at the registrar weren't changed to ours** - double-check that they're set to `ns1.senkodns.net` and `ns2.senkodns.net`.
- **Less than 72 hours have passed since the changes** - DNS records need time to propagate around the world.
- **The A record points to the wrong IP** - make sure the IP actually belongs to the server hosting your site.
- **The trailing dot is missing in a fully qualified name** - without it the record gets "glued together" into the wrong name.
- **The domain type in DNSmanager isn't set to `master`** - in that case our nameservers won't serve the records.

You can check how your domain looks from the outside with the `dig` utility or online services like [dnschecker.org](https://dnschecker.org). Correct NS records alone do not confirm that the site is configured. Check its A and AAAA records, then check the web server, firewall, and HTTPS certificate.

### Flush Your Local DNS Cache

If online services already show the new records but on your computer the domain still resolves to the old data (or doesn't resolve at all) - chances are your operating system's DNS cache is to blame. You can clear it with a single command:

- **Windows** (in Command Prompt as Administrator):

  ```bash
  ipconfig /flushdns
  ```

- **macOS** (in Terminal):

  ```bash
  sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder
  ```

- **Linux** (depends on the distribution - one of these usually works):

  ```bash
  sudo resolvectl flush-caches
  sudo systemd-resolve --flush-caches
  ```

After flushing the cache, try opening the domain again.

::: tip
Try opening the site on your phone over mobile data. If it works there, compare DNS responses from both connections. The difference may be caused by caching, IPv4/IPv6 connectivity, or network restrictions.
:::

If you've gone through the list and the issue is still there - reach out to our [support team](https://senko.digital/contacts). We'll help you sort it out.

---

That's it! Your domain now lives on Senko Digital nameservers, and you can manage its DNS records yourself through DNSmanager - no support tickets, no waiting.
