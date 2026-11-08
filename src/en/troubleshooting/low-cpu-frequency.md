---
title: "Low CPU Frequency in Virtual Machines"
description: "Explanation of why low CPU frequency appears in virtual machines and how CPU operates in virtualized environments."
head:
  - - meta
    - name: keywords
      content: cpu frequency, processor, cpu frequency, virtualization, kvm, qemu, vps
  - - meta
    - property: og:title
      content: "Low CPU Frequency in Virtual Machines"
  - - meta
    - property: og:description
      content: "Explanation of why low CPU frequency appears in virtual machines and how CPU operates in virtualized environments."
---

# Low CPU Frequency in Virtual Machines

## Why the displayed frequency may be low

A VPS does not show the physical CPU's current clock speed. Tools such as `lscpu` or `/proc/cpuinfo` usually show the CPU's base frequency, which the hypervisor passes to the guest OS. This value does not track changes in the physical CPU's frequency under load.

A low displayed value alone does not show that your VPS is slow. It also does not rule out a real performance problem.

## How to check performance

Check how your application performs under its usual workload. Compare results using the same application version, settings, and number of vCPUs.

While the application is running, use `top` to check CPU usage. The `st` (steal time) value shows time when a virtual CPU was waiting while the host was doing other work. A consistently high value can help explain slowdowns, but a low steal time value does not rule out other limits.

Shared vCPU allocations, your plan's limits, disk activity, and the application itself can all affect performance. A benchmark can help with comparisons, but its score does not directly measure the physical CPU's current frequency.

## When to contact support

If your application is slower than expected, send support your plan, the time of the slowdown, the commands or workload used, and the results. Include CPU usage and steal time if available. This gives us more useful information than a screenshot of the frequency alone.
