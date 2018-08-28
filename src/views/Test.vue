<template>
    <div>
        <chapter-test></chapter-test>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Chaptertest from '@/components/Chaptertest.vue';

@Component({
    components: {
        'chapter-test': Chaptertest,
    },
})
export default class Test extends Vue {}
</script>
