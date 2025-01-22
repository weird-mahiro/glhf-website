<script lang="ts">
  import { config } from "../../config";
</script>

<div class="relative">
  <div>
    <div
      class="grid grid-cols-1 space-y-12 bg-black px-8 py-24 text-white md:p-[120px] lg:grid-cols-2 lg:space-y-0"
    >
      <div class="space-y-6">
        <h2 class="font-ps text-4xl">Socials</h2>
        <ul class="space-y-2 text-2xl">
          {#each config.socials as social}
            <li>
              <a
                class="hover:text-red hover:underline"
                href={social.url}
                target="_blank">{social.type}</a
              >
            </li>
          {/each}
        </ul>
      </div>
      <div class="space-y-6">
        <h2 class="font-ps text-4xl">{config.footer.shortParagraph.title}</h2>
        <p class="text-xl md:text-2xl">
          {config.footer.shortParagraph.details}
        </p>
      </div>
    </div>
  </div>
</div>
