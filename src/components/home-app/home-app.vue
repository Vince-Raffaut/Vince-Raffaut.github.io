<template>
    <div>
        <header class="container-fluid gutter-tb-sm">
            <div class="row row-sm justify-content-md-end">
                <div class="col-auto">
                    <div class="m-bot-sm">
                        <a class="btn btn-primary" target="_blank" :href="personal.contactDetails.linkedin">
                            <span class="sr-only">Linkedin</span>
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="m-bot-sm">
                        <a class="btn btn-primary" :href="'mailto:' + personal.contactDetails.emailAddress">
                            <span class="sr-only">{{ personal.contactDetails.emailAddress }}</span>
                            <i class="fa fa-envelope-open"></i>
                        </a>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="m-bot-sm">
                        <a class="btn btn-primary" target="_blank" :href="personal.contactDetails.github">
                            <span class="sr-only">GitHub</span>
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <div class="container-fluid gutter-tb">
            <h1 class="h1 text-center">UI by Vince Raffaut</h1>
            <div class="row justify-content-center m-bot-xl">
                <div class="col-auto">
                    <i class="fa fa-desktop icon-lg"></i>
                </div>
                <div class="col-auto">
                    <i class="fa fa-laptop icon-lg"></i>
                </div>
                <div class="col-auto">
                    <i class="fa fa-tablet-alt icon-lg"></i>
                </div>
                <div class="col-auto">
                    <i class="fa fa-mobile-alt icon-lg"></i>
                </div>
                <div class="col-auto">
                    <i class="fa fa-low-vision icon-lg"></i>
                </div>
            </div>
            <div class="text-center">
                <p><strong>UI Experiences for all devices and all users</strong></p>
                <div>{{ personal.DevTitleDescription}}</div>
            </div>
        </div>
        <div class="container-fluid gutter-tb">
            <div><h2 class="h2">Experience</h2></div>
            <div class="row">
                <div class="col-12 col-md-6 m-bot" v-for="experience in personal.experience" :key="experience.school">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="h3">{{ experience.title }}</h3>
                            <div>{{ formatDate(experience.dateStarted)}} - {{ formatDate(experience.dateFinished) }} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid gutter-tb">
            <div><h2 class="h2">Education</h2></div>
            <div class="row">
                <div class="col-12 col-md-6 m-bot" v-for="item in personal.education" :key="item.title">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="h3">{{ item.educationTitle }}</h3>
                            <h4 class="h4">{{ item.school }}</h4>
                            <div>{{ formatDate(item.dateStarted)}} - {{ formatDate(item.dateFinished) }} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import myInfo from "../../personal.json";
    import moment from 'moment';

    export default {
        name: 'home-app',
        data() {
            return {
                personal: myInfo
            }
        },
        computed: {
            
        },
        methods: {
            formatDate(value) {
                if (value != null) {
                    return moment(value).format('MMM YYYY');
                } else {
                    return 'Present';
                }
            }
        },
        mounted () {
            
        }
    }
</script>