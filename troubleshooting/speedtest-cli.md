---
title: "Server Speed Testing"
description: "Instructions for installing and using Speedtest CLI to test server speed on various operating systems."
head:
  - - meta
    - name: keywords
      content: speedtest, speed test, ookla, cli, ubuntu, debian, fedora, centos, freebsd
  - - meta
    - property: og:title
      content: "Server Speed Testing"
  - - meta
    - property: og:description
      content: "Instructions for installing and using Speedtest CLI to test server speed on various operating systems."
---

# Server Speed Testing

Speedtest CLI is the official utility from Ookla for testing connection speed through your server's command line.

This guide will help you install and use Speedtest CLI on various operating systems.

## Installation

::: code-group

```bash [Ubuntu/Debian]
# Removing unofficial versions of Speedtest CLI
sudo rm /etc/apt/sources.list.d/speedtest.list
sudo apt-get update
sudo apt-get remove speedtest
sudo apt-get remove speedtest-cli

# Installing sudo if not already installed
apt install sudo -y

# Installing Speedtest CLI
sudo apt-get install curl
curl -s https://packagecloud.io/install/repositories/ookla/speedtest-cli/script.deb.sh | sudo bash
sudo apt-get install speedtest
```

```bash [Fedora/CentOS/RedHat]
# Removing unofficial versions of Speedtest CLI
sudo rm /etc/yum.repos.d/bintray-ookla-rhel.repo
sudo yum remove speedtest
rpm -qa | grep speedtest | xargs -I {} sudo yum -y remove {}

# Installing Speedtest CLI
curl -s https://packagecloud.io/install/repositories/ookla/speedtest-cli/script.rpm.sh | sudo bash
sudo yum install speedtest
```

```bash [FreeBSD]
# Updating the system and installing dependencies
sudo pkg update && sudo pkg install -g libidn2 ca_root_nss

# Installing Speedtest CLI for FreeBSD 12
sudo pkg add "https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-freebsd12-x86_64.pkg"

# Installing Speedtest CLI for FreeBSD 13
sudo pkg add "https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-freebsd13-x86_64.pkg"
```

:::

## Usage

To run a speed test, execute the command:

```bash
speedtest
```

When starting the utility for the first time, you need to accept the license agreement and [privacy policy](https://www.speedtest.net/privacy):

![license agreement](/images/troubleshooting/speedtest-cli/1.png){data-zoomable}

To accept the terms, type `YES` and press `[Enter]`

After accepting the terms, the utility will automatically start testing the network speed:

![registration form](/images/troubleshooting/speedtest-cli/2.png){data-zoomable}

Upon completing the test, the utility will generate a link to the test results, which you can use to send to support or share with friends.

---

To select a specific server, use:

```bash
speedtest --server-id=1234
```

where `1234` is the Speedtest server ID

---

To view a list of available servers, use the command:

```bash
speedtest --servers
```

## Additional Parameters

### Basic Parameters

- `-h, --help` - display help
- `-v` - verbosity level (can be specified multiple times, e.g. `-vvv`)
- `-V, --version` - display utility version
- `-L, --servers` - display list of nearest servers
- `--selection-details` - display server selection details
- `-s id, --server-id=id` - specify a particular server by ID
- `-o hostname, --host=hostname` - specify server by hostname
- `-f format_type, --format=format_type` - output format (default `human-readable`)
- `--progress=yes|no` - enable/disable progress indicator
- `-I interface, --interface=interface` - bind to a specific network interface
- `-i ip_address, --ip=ip_address` - bind to a specific IP address
- `--ca-certificate=path` - path to CA certificate

### Output Formats

- `human-readable` - human-readable format (default)
- `csv` - comma-separated values
- `tsv` - tab-separated values
- `json` - JavaScript Object Notation (compact)
- `jsonl` - JavaScript Object Notation (line-oriented)
- `json-pretty` - JavaScript Object Notation (formatted)

### Speed Measurement Units

#### Decimal Units
- `bps` - bits per second
- `kbps` - kilobits per second
- `Mbps` - megabits per second
- `Gbps` - gigabits per second
- `B/s` - bytes per second
- `kB/s` - kilobytes per second
- `MB/s` - megabytes per second
- `GB/s` - gigabytes per second

#### Binary Units
- `kibps` - kibibits per second
- `Mibps` - mebibits per second
- `Gibps` - gibibits per second
- `kiB/s` - kibibytes per second
- `MiB/s` - mebibytes per second
- `GiB/s` - gibibytes per second

### Abbreviations for Measurement Units

- `-a` - abbreviation for `-u auto-decimal-bits`
- `-A` - abbreviation for `-u auto-decimal-bytes`
- `-b` - abbreviation for `-u auto-binary-bits`
- `-B` - abbreviation for `-u auto-binary-bytes`

## Usage Examples

```bash
# Basic speed test to the nearest server, auto-selected
speedtest
```

```bash
# Speed test with server selection and JSON output
speedtest --server-id=1234 --format=json
```

```bash
# Speed test with progress indicator disabled
speedtest --progress=no
```

```bash
# Speed test with output in megabytes per second
speedtest --unit=MB/s
```

```bash
# Speed test with binding to a specific network interface
speedtest --interface=eth0
```
