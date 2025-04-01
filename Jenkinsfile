pipeline {
    agent any
   
    // Define environment variables if needed
    environment {
        NODE_VERSION = '18'
        GIT_REPO = 'https://github.com/drvasavib/Nodejs.git'
        GIT_BRANCH = 'master' // or 'main' depending on your repo
    }
   
    // Configure tools (requires Node.js plugin)
    tools {
        nodejs 'nodejs' // Must match Node.js installation name in Jenkins
    }
   
    stages {
        // Stage 1: Checkout code from Git repository
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "${env.GIT_BRANCH}"]],
                    userRemoteConfigs: [[
                        url: "${env.GIT_REPO}",
                        credentialsId: '' // Add credentials ID if needed
                    ]]
                ])
               
                // Alternative simple checkout syntax:
                // git url: "${env.GIT_REPO}", branch: "${env.GIT_BRANCH}"
            }
        }
       
        // Stage 2: Install dependencies
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
       
        // Stage 3: Run tests
        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit '**/test-results.xml' // If your tests generate JUnit reports
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'coverage',
                        reportFiles: 'lcov-report/index.html',
                        reportName: 'Coverage Report'
                    ])
                }
            }
        }
       
        // Stage 4: Build (optional)
        stage('Build') {
            steps {
                sh 'npm run build' // If you have a build script
            }
        }
    }
   
    post {
        always {
            echo 'Pipeline completed - cleaning up'
            // Clean workspace to save disk space
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
