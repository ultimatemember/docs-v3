<template>
    <div>
    <div style="padding: 30px 50px">
        <h3 style="width:100%;border-bottom:1px solid rgb(240, 239, 239);padding-bottom:10px;margin-bottom:0px">Help &amp; Support</h3>
        <div style="width: 45%; display: inline-block; vertical-align: top;">
            <h4>Help us make these docs great!</h4>
            <div>
            All Ultimate Member docs are open source. See something that's wrong or unclear? <a v-bind:href="'https://github.com/ultimatemember/docs-v3/tree/main/um-stripe' + $page.path.replace('.html','.md')">Submit a pull request</a>.
            </div>
        </div>
        <div style="width: 45%; display: inline-block; vertical-align: top;padding-left: 30px">
            <h4>Still need help?</h4>
            <div>
            <a href="https://ultimatemember.com/support/ticket" target="_blank">Contact Support</a>
            </div>
        </div>
    </div>
    <div style="padding: 30px;color: rgb(132, 116, 134)">
        © 2023 Ultimate Member Group Ltd.
    </div>
</div>
</template>