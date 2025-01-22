<script lang="ts">
  import { config } from "../../config";
  import TextLink from "./button/TextLink.svelte";
</script>

<div class="mb-24 px-8 md:mb-32 md:px-[120px]">
  <div class="mb-8 flex justify-center md:mb-12">
    <h1 class="font-ps text-5xl md:text-7xl">
      <span class="text-red">MEME</span>
      <span class="text-blue">PACK</span>
    </h1>
  </div>
  <div class="flex justify-center">
    <TextLink url={config.memePack}>Content Pack</TextLink>
  </div>
</div>
