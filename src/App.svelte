<script lang="ts">
  import { Toaster } from "svelte-sonner";
  import { config } from "../config";
  import Banner1 from "./components/Banner1.svelte";
  import NavBar from "./components/NavBar.svelte";
  import InformationTemplate from "./components/InformationTemplate.svelte";
  import Banner2 from "./components/Banner2.svelte";
  import MemePack from "./components/MemePack.svelte";
  import Banner3 from "./components/Banner3.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Toaster position="bottom-center" />

<div class="relative">
  <Banner1 />
  <InformationTemplate
    titleRed={config.section[0].titleRed}
    titleBlue={config.section[0].titleBlue}
    details={config.section[0].details}
  />
  <Banner2 />
  <InformationTemplate
    titleRed={config.section[1].titleRed}
    titleBlue={config.section[1].titleBlue}
    details={config.section[1].details}
  />
  <Banner3 />
  <MemePack />
  <Footer />
</div>
