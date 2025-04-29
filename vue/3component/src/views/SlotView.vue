<script>
import FancyButton from '@/components/FancyButton.vue';
import SlotModalLayout from '@/components/SlotModalLayout.vue';

export default {
  components: { FancyButton, SlotModalLayout },
  data() {
    return {
      
    };
  }
}
</script>
<template>
  <FancyButton>팬시~</FancyButton>
  <FancyButton>Fancy~</FancyButton>
  <SlotModalLayout>
    <template #header>
      <h1>팝업 타이틀</h1>
    </template>
    <template #default>
      <p>팝업 컨텐츠 1</p>
      <p>팝업 컨텐츠 2</p>
    </template>
    <template #footer>
      <button type="button">닫기</button>
    </template>
  </SlotModalLayout>
</template>
<style>
  
</style>