<script lang="ts">
  import { config } from "../../config";
</script>

<div class="relative mb-24 md:mb-32">
  <div
    class="absolute bottom-1/2 left-0 right-0 z-10 flex justify-center text-white"
  >
    <h2 class="font-ps text-5xl md:text-7xl">{config.banner[1].text}</h2>
  </div>
  <div class="z-0 h-[80vh] overflow-hidden">
    <img
      class="h-full w-full object-cover"
      src={config.banner[1].image}
      alt=""
    />
  </div>
</div>
