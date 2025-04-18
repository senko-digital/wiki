---
title: "Solving Low VPN Speed Issues"
description: "Detailed guide for diagnosing and fixing low speed issues when using VPS as a VPN server. Includes network settings checks, configuration optimization, and performance improvement recommendations."
head:
  - - meta
    - name: keywords
      content: vpn, vpn speed, vpn optimization, vps, network settings, troubleshooting
  - - meta
    - property: og:title
      content: "Solving Low VPN Speed Issues"
  - - meta
    - property: og:description
      content: "Detailed guide for diagnosing and fixing low speed issues when using VPS as a VPN server."
---

# Solving Low VPN Speed Issues

## Introduction

When hosting your own VPN on our virtual servers, you may sometimes encounter issues with connection speed or stability.

In this article, we explain the main causes of speed reduction and methods to resolve them. Before starting optimization, it's necessary to perform diagnostics to determine the source of the problem.

## Speed Diagnostics

First, you need to run speed tests from both your device and the server itself.

To test your network speed, we recommend using official applications from Ookla. Download links: [Windows/macOS](https://www.speedtest.net/apps/desktop), [iOS](https://itunes.apple.com/us/app/speedtest-by-ookla/id300704847?mt=8), [Android](https://www.speedtest.net/apps/android)

On the server, we also recommend using Ookla's official utility - Speedtest CLI. Detailed instructions for using Speedtest CLI are available in the article [Server Speed Testing](/troubleshooting/speedtest-cli).

When testing speed, it's recommended to choose servers located in the same region as your server. This will provide more accurate measurement results.

If you identify speed issues on the server, we recommend contacting our support team for diagnostics and troubleshooting.

## Network Settings

### MTU

Due to the specifics of our network, for protocols using UDP (WireGuard, AmneziaWG, OpenVPN and others), the optimal MTU value on the server side is `1420`. This value prevents packet fragmentation and provides a more stable connection compared to automatically determined MTU.

On your VPN client side it is recommended to use a value of MTU `1332` or `1368`. If neither works well for you, try selecting a value between the two.

### SNI

When using protocols like VLESS, V2Ray, and others that require SNI (Server Name Indication), consider the following recommendations:

- Use domains with a positive reputation
- Avoid suspicious names
- Ensure SSL certificates are "fresh"
- Choose domains with the lowest ping to reduce connection setup latency

## Performance Optimization

### VPN Protocols

Different VPN protocols have different performance characteristics:

- WireGuard: optimal performance, high speed, stable connection
- OpenVPN: stable connection, easy setup
- VLESS/V2Ray: high performance when configured correctly

### System Settings

1. TCP BBR configuration:
```bash
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
sysctl -p
```

2. Network settings optimization:
```bash
cat >> /etc/sysctl.conf << EOF
net.ipv4.tcp_fastopen = 3
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_keepalive_time = 1200
net.ipv4.tcp_local_port_range = 10000 65000
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.tcp_max_tw_buckets = 5000
net.ipv4.tcp_fack = 1
net.ipv4.tcp_ecn = 1
net.ipv4.tcp_sack = 1
net.ipv4.tcp_timestamps = 1
EOF
sysctl -p
```

### Monitoring

To maintain optimal performance, it's recommended to regularly check:

- CPU load
- RAM usage
- Network activity
- System logs

By regularly checking these parameters, you can be confident there are no issues with the server itself.

## Conclusion

Optimizing VPN speed requires a special approach. Following the recommendations in this article will help improve your VPN server's performance. If speed issues persist after applying all recommendations, we recommend contacting our support team for further diagnostics.

