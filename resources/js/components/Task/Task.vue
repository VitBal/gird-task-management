<template>
    <v-row justify="center">
            <v-col cols="12" md="6">
            <v-btn @click="showCreateTask = !showCreateTask"><v-icon>mdi-plus</v-icon>Добавить задачу</v-btn>

            <v-card v-show="showCreateTask">
                <v-card-title class="px-1 pb-0 pt-2">
                    <v-text-field
                        v-model="task.title"
                        label="Название задачи"
                        dense
                    />
                </v-card-title>

                <div v-for="item in items">
                    {{ item.text }}
                </div>

                <div>
                    <p>Add some text to component</p>
                </div>

                <v-card-text class="px-1 py-0">
                    <v-row>
                        <v-col>
                            <v-textarea
                                v-model="task.text"
                                label="Описание"
                                auto-grow
                                rows="1"
                                row-height="15"
                                outlined
                                dense
                            />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col v-show="showDate">
                            <base-date-picker></base-date-picker>
                        </v-col>
                        <v-col v-show="showTaskStatus">
                            <v-select
                                :items="statuses"
                                label="Выбор статуса"
                            ></v-select>
                        </v-col>
                        <v-col v-show="showProfiles">
                            <v-select
                                :items="profiles"
                                label="Выбор профилей"
                            ></v-select>
                        </v-col>
                        <v-col v-show="showInputFiles">
                            <base-file-input
                                v-model="files"
                                :extensions="extensions"
                                :max-size="maxSize"
                            ></base-file-input>
                        </v-col>
                    </v-row>

                </v-card-text>
                <v-card-actions class="px-1 pt-0 pb-1">
                    <v-btn icon @click="showDate = !showDate"><v-icon>mdi-clock</v-icon></v-btn>
                    <v-btn icon @click="showTaskStatus = !showTaskStatus"><v-icon>mdi-crop-square</v-icon></v-btn>
                    <v-btn icon @click="showProfiles = !showProfiles"><v-icon>mdi-account</v-icon></v-btn>
                    <v-btn icon @click="showInputFiles = !showInputFiles"><v-icon>mdi-paperclip</v-icon></v-btn>
                    <v-spacer />
                    <v-btn @click="addTask">Сохранить</v-btn>
                </v-card-actions>
            </v-card>

            <v-list subheader two-line flat dense>
                <v-subheader class="subheading" v-if="tasks.length === 0">У вас 0 задач</v-subheader>
                <v-subheader class="subheading" v-else>У Вас {{ tasks.length }} задач</v-subheader>

                <v-list-item-group>
                    <v-list-item v-for="(task, i) in tasks" :key="i" dense class="my-item">
                        <template #default="{ active, toggle }">
                            <v-list-item-action class="pa-0">
                                <v-checkbox v-model="active" @click="toggle"></v-checkbox>
                            </v-list-item-action>

                            <v-list-item-content class="pa-0">
                                <v-list-item-title>{{ task.title }}</v-list-item-title>
                                <v-list-item-subtitle>Добавлена: 1 января 2022 г.</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-btn text v-if="active" @click="removeTask(i)">
                                Добавить подзадачу
                            </v-btn>
                            <v-btn icon color="red" v-if="active" @click="removeTask(i)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-col>
    </v-row>

</template>

<script>
    import BaseDatePicker from "gird-base-front/src/components/BaseDatePicker";
    import BaseFileInput from "gird-base-front/src/components/BaseFileInput";
    import BaseColorListMenu from "gird-base-front/src/components/BaseColorListMenu";

    export default {
        name: "Task",
        components: {
            BaseDatePicker,
            BaseFileInput,
            BaseColorListMenu,
        },
        data: () => ({
            task: {
                title: "",
                text: "",
            },
            tasks: [],
            showCreateTask: true,

            // Управление видимостью ввода данных
            showDate: false,
            showTaskStatus: false,
            showProfiles: false,
            showInputFiles: false,

            // Файлы
            files: [],
            extensions: [],
            maxSize: 10240, // дефолтное значение

            profiles: ['Профиль 1', 'Профиль 2', 'Профиль 3', 'Профиль 4'],
            statuses: ['Статус 1', 'Статус 2', 'Статус 3', 'Статус 4'],


        }),
        methods: {
            addTask() {
                this.tasks.push({
                    title: this.task.title,
                    text: this.task.text,
                    done: false
                });
            },
            removeTask(index) {
                this.tasks.splice(index, 1);
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-item {
        min-height: 20px;
    }

    .my-list {
        min-height: 20px;
        max-height: 25px;
    }
</style>
