---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
publish: false
date: 2025-03-11
---

# 周末晚の导航站

<style src="/.vitepress/theme/styles/nav.scss"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/utils/data'
</script>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
