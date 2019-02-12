<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="30px"
    height="8px"
    viewBox="0 0 30 8"
    enable-background="new 0 0 30 8"
    xml:space="preserve"
  >
    <rect x="0" y="0" width="8" height="8" fill="red" opacity=".2">
      <animate
        attributeName="opacity"
        attributeType="XML"
        values=".2 ; 1; .2"
        begin="0s"
        dur=".6s"
        repeatCount="indefinite"
        id="first"
      />
    </rect>

    <rect x="10" y="0" width="8" height="8" fill="red" opacity=".2">
      <animate
        attributeName="opacity"
        attributeType="XML"
        values=".2 ; 1; .2"
        begin="first.begin + .15s"
        dur=".6s"
        repeatCount="indefinite"
        id="second"
      />
    </rect>

    <rect x="20" y="0" width="8" height="8" fill="red" opacity=".2">
      <animate
        attributeName="opacity"
        attributeType="XML"
        values=".2 ; 1; .2"
        begin="second.begin + .15s"
        dur=".6s"
        repeatCount="indefinite"
        id="third"
      />
    </rect>
  </svg>
</template>

<script>
export default {};
</script>

<style></style>
