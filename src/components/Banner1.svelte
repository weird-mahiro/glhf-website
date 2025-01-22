<script lang="ts">
  import { config } from "../../config";
  import CopyButton from "./button/CopyButton.svelte";
  import SocialLink from "./button/SocialLink.svelte";
  import DisableInput from "./input/DisableInput.svelte";
  import TextLink from "./button/TextLink.svelte";
</script>

<div class="relative mb-24 md:mb-32">
  <div class="absolute bottom-[10%] left-0 right-0 z-10">
    <div class=" px-8">
      <div class="mx-auto mb-4 flex max-w-[1000px] gap-2 md:mb-6">
        <DisableInput ca={config.ca} />
        <CopyButton info={config.ca} />
      </div>
      <div class="mb-4 flex justify-center md:mb-6">
        <div class="flex gap-2">
          {#each config.socials as social}
            <SocialLink url={social.url}
              ><img src={social.logoUrl} alt="" /></SocialLink
            >
          {/each}
        </div>
      </div>
      <div class="flex justify-center">
        <TextLink url={config.jup}>Buy at Jup.ag</TextLink>
      </div>
    </div>
  </div>
  <div class="z-0 h-[80vh] overflow-hidden">
    <img
      class="h-full w-full object-cover"
      src={config.banner[0].image}
      alt=""
    />
  </div>
</div>
