<template>
    <v-container>
        <task />
    </v-container>
</template>

<script>
    import Task from "../components/Task/Task";
    export default {
        name: "Home",
        components: {Task},
        data: function () {
            return {
                //
            }
        },
    }
</script>

<style scoped>

</style>
