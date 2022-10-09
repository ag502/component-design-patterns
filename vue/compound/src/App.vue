<template>
  <div id="app">
    <Tabs initial-active-tab="profile">
      <div :class="$style.section">
        <Tab id="home">Home</Tab>
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </div>
      <div :class="$style.section">
        <TabPanel id="home">Home Panel</TabPanel>
        <TabPanel id="profile">Profile Panel</TabPanel>
        <TabPanel id="settings">Settings Panel</TabPanel>
      </div>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Tabs, Tab, TabPanel } from "./components/tab";

export default Vue.extend({
  name: "App",

  components: {
    Tabs,
    Tab,
    TabPanel,
  },
});
</script>

<style module>
.section {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>
