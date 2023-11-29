#!groovy
pipeline {
    agent any
    environment {
        app_name = 'sso-ui'
        version = "1.0-${BRANCH_NAME}.${BUILD_NUMBER}"
    }
    stages {
        // TODO npm build and run unit tests
        stage('Docker Build') {
            steps {
                discordSend description: "${DISCORD_START_MESSAGE}", footer: "", enableArtifactsList: false, link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK_URL}"
                sh 'docker image build -t ${app_name}:${version} -t ${app_name}:latest .'
                sh 'docker image tag ${app_name}:${version} ${REGISTRY_SERVER}/${app_name}:${version}'
                sh 'docker image tag ${app_name}:latest ${REGISTRY_SERVER}/${app_name}:latest'
            }
        }
        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'nexus-credentials', usernameVariable: 'CREDENTIALS_USERNAME', passwordVariable: 'CREDENTIALS_PASSWORD')]) {
                    sh 'echo $CREDENTIALS_PASSWORD |  docker login -u ${CREDENTIALS_USERNAME} --password-stdin ${REGISTRY_URL}'
                    sh 'docker push ${REGISTRY_SERVER}/${app_name}:${version}'
                    sh 'docker push ${REGISTRY_SERVER}/${app_name}:latest'
                }
            }
        }
    }
    post {
        success {
            discordSend description: "${DISCORD_SUCCESS_MESSAGE}", footer: "", enableArtifactsList: false, link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK_URL}"
        }
        failure {
            discordSend description: "${DISCORD_FAIL_MESSAGE}", footer: "", enableArtifactsList: false, link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK_URL}"
        }
        always {
            sh 'docker logout'
        }
    }
}