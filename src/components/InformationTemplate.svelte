<script lang="ts">
  let {
    titleRed,
    titleBlue,
    details,
  }: { titleRed: string; titleBlue: string; details: string[] } = $props();
</script>

<div class="mb-24 px-8 md:mb-32 md:px-[120px]">
  <div class="mb-8 flex justify-center md:mb-12">
    <h1 class="font-ps text-5xl md:text-7xl">
      <span class="text-red">{titleRed}</span>
      <span class="text-blue">{titleBlue}</span>
    </h1>
  </div>
  <div class="mx-auto max-w-[1000px] space-y-4 md:space-y-6">
    {#each details as detail}
      <p class="indent-4 text-base md:indent-12 md:text-2xl">{detail}</p>
    {/each}
  </div>
</div>
