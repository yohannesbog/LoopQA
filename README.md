# LoopQA
Playwright Test Suite with POM and Data-Driven Approach

Overview

This project demonstrates a scalable and maintainable test automation framework using Playwright. It uses the Page Object Model (POM) design pattern and a data-driven approach to minimize code duplication and improve readability.

Features

Login Automation: Automates login to a demo application.

Page Object Model (POM): Encapsulates reusable methods (e.g., login and navigation).

Data-Driven Testing: Test scenarios are dynamically generated from a JSON file.

Scalability: Adding new test cases is as simple as updating the test data file.

## Prerequisites

Node.js (>= 16.x)

Playwright (npm install playwright)

## Setup

#Clone the repository: 
git clone <repository_url>

# Install dependencies: npx install
 
# Ensure Playwright browsers are installed:  npx playwright install

## Usage

# Run the test suite: npx playwright test

# View the test results in the console or generate an HTML report:  npx playwright show-report
