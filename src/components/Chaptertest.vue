<template>
    <div>
        <input type="text" v-model="chaptertest" placeholder="chapter name">
        <p>There should be a chapter name displayed below as {{chaptertest}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

let chaptertest: string;

@Component
export default class Chaptertest extends Vue {
    data() {
        return {
            chaptertest: '',
        };
    }
}
</script>
