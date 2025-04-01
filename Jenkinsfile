pipeline {
    agent any
   
    tools {
        nodejs 'Node-JS' // Matches the name you configured in Global Tools
    }
   
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
       
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
       
        stage('Build') {
            steps {
                sh 'node server.js' // If you have a build script
            }
        }
    }
}
