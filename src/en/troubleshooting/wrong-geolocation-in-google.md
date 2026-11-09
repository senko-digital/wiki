---
title: "Incorrect Geolocation in Google and Other Services"
description: "What to do when Google or another service shows the wrong country for your server's IP address."
head:
  - - meta
    - name: keywords
      content: geolocation, virtual server, ip address, google, geolocation databases, wrong location
  - - meta
    - property: og:title
      content: "Incorrect Geolocation in Google and Other Services"
  - - meta
    - property: og:description
      content: "What to do when Google or another service shows the wrong country for your server's IP address."
---

# Incorrect Geolocation in Google and Other Services

Google and other services may show the wrong country for your server's IP address. This can happen when their geolocation data is outdated or when a service uses your device or account location instead.

## How to diagnose this issue

1. Check which IP address the service sees. If you use a VPN on your server, your public IP should match the VPN server's address.
2. Open the service in a private browser window and check the country it shows.
3. Check whether the service is using your IP, device location or account settings, if this information is available.
4. Compare the result with the location you ordered.

Also check IPv4 and IPv6 separately: a VPN that routes only IPv4 may leave IPv6 traffic using your local connection.

### Checking Google Search

Make a search and look at the location at the bottom of the results page. Google also shows where it got that location, such as your IP address or device. See [Google's location help](https://support.google.com/websearch/answer/179386?hl=en) for details.

If Google is using your device or account location, the country shown may differ from your server's country even when its IP geolocation is correct.

## Why this happens

Services use different IP geolocation databases, and updates do not reach all of them at the same time. The same IP address can therefore appear in different countries on different websites.

Some services also use device location and account information. Google, for example, may use your device's location and previous activity. This means it may show a different country even when you connect through a VPN on your server.

We cannot directly change the location data used by Google or other services. Corrections need to be made by the service or its geolocation provider.

## How to check location information

Compare the IP address in [Check Host](https://check-host.net), [IPinfo](https://ipinfo.io), and [MaxMind](https://www.maxmind.com/en/geoip-demo). These are estimates, not proof of the server's physical location.

We keep the location data in the [RIPE Database](https://apps.db.ripe.net/db-web-ui/query) correct for every subnet we manage. You can check your server's IP address there to confirm its country.

We also submit our [geofeed](https://as213520.net/geofeed.csv), which lists the locations of our IP subnets, to all major IP geolocation database providers, including MaxMind, IPinfo.io, DB-IP, IP2Location and others.

## How to report incorrect geolocation

If Google is using your server's IP and shows the wrong country, submit the address and the actual country through [Google's feedback form](https://support.google.com/websearch/workflow/9308722?hl=en). Corrections are handled by Google and may not appear immediately.

For other services, contact their support or use their geolocation correction form if one is available. Include your server's IP address, its actual country and a screenshot of the incorrect location. If the service names its geolocation provider, you can also report the error to that provider.

## Our solution options

Contact our support with the affected IP, the service showing the wrong location, the expected country and a screenshot. If the service shows the source of its location data, include that too. An IP replacement may be available under our [replacement policy](/faq#do-you-offer-ip-replacements), but it does not guarantee that the service will show the correct location. BUDGET plans have separate replacement conditions.
