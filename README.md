# AWS Architecture Modules

## Overview

This repository contains a collection of **production-ready AWS architecture templates** built with Terraform. Each architecture demonstrates different levels of security, scalability, and complexity, providing reusable infrastructure-as-code modules for various deployment scenarios.

The repository includes three distinct architectures:
- **Single-Tier Architecture** - Simple, all-in-one deployment
- **Three-Tier Architecture** - Scalable multi-tier application structure
- **Advanced DMZ-Based Architecture** - Enterprise-grade security with DMZ isolation

## Tech Stack

- **Infrastructure as Code**: Terraform (modular structure)
- **Cloud Provider**: AWS (VPC, EC2, RDS, ALB, WAF, NAT Gateway, Auto Scaling)
- **Operating System**: Ubuntu 24.04
- **Application Stack**: Nginx + Flask + MySQL/SQLite
- **Automation**: Shell scripts for automated provisioning

## Architecture Modules

### 1. Single-Tier Architecture

**Purpose**: Development and testing environments with minimal complexity

**Key Features**:
- All components (web, app, database) run on a **single EC2 instance**
- Fully automated deployment via user data script
- Uses lightweight **SQLite** database
- Minimal AWS resources and costs
- Ideal for PoC, demos, and learning

**Use Cases**:
- Small applications and MVPs
- Development/testing environments
- Cost-sensitive projects
- Learning infrastructure-as-code basics

📁 [View Details →](./single-tier-architecture/)

---

### 2. Three-Tier Architecture

**Purpose**: Production-ready scalable applications with tier separation

**Key Features**:
- **Web Tier**: Nginx servers behind Application Load Balancer
- **App Tier**: Flask application servers with Auto Scaling
- **DB Tier**: AWS RDS (managed) or EC2-based MySQL
- Multi-AZ deployment for high availability
- Auto Scaling Groups for dynamic scaling
- Modular Terraform structure for easy customization

**Use Cases**:
- Production web applications
- Scalable microservices
- Applications requiring tier isolation
- Projects needing auto-scaling capabilities

📁 [View Details →](./three-tier-architecture/)

---

### 3. Advanced DMZ-Based Architecture

**Purpose**: Enterprise-grade security with strict network isolation

**Key Features**:
- **Complete private subnet isolation** for all application tiers
- **DMZ (Demilitarized Zone)** with security boundary components:
  - AWS WAF for web application firewall protection
  - Application Load Balancer in public subnet
  - NAT Gateway for outbound internet access
  - Bastion Host for secure administrative access
- **Defense in depth** security model
- **Zero direct internet access** for application instances
- Enhanced security groups with tier-based restrictions

**Use Cases**:
- Financial services and banking applications
- Healthcare systems requiring HIPAA compliance
- Government and regulated industry workloads
- Applications handling sensitive customer data
- Enterprise applications with strict security requirements

📁 [View Details →](./advanced-DMZ-architecture/)

---

## Architecture Comparison

| Feature | Single-Tier | Three-Tier | DMZ-Based |
|---------|------------|------------|-----------|
| **Complexity** | Low | Medium | High |
| **Security** | Basic | Enhanced | Enterprise |
| **Scalability** | Limited | High | High |
| **Cost** | Lowest | Medium | Highest |
| **High Availability** | No | Yes | Yes |
| **Auto Scaling** | No | Yes | Yes |
| **Network Isolation** | Minimal | Moderate | Maximum |
| **WAF Protection** | No | No | Yes |
| **Bastion Host** | No | Optional | Yes |
| **Best For** | Dev/Test | Production Apps | Regulated Industries |

## Quick Start

### Prerequisites

- AWS Account with appropriate permissions
- AWS CLI configured
- Terraform >= 1.0 installed
- SSH key pair created in AWS

### Basic Usage

1. **Choose an architecture** and navigate to its directory:
   ```bash
   cd single-tier-architecture/
   # or
   cd three-tier-architecture/
   # or
   cd advanced-DMZ-architecture/
   ```

2. **Initialize Terraform**:
   ```bash
   terraform init
   ```

3. **Review the plan**:
   ```bash
   terraform plan
   ```

4. **Apply the configuration**:
   ```bash
   terraform apply
   ```

5. **Access your application**:
   - For Single-Tier: `http://<ec2_public_ip>`
   - For Three-Tier & DMZ: `http://<alb_dns_name>`

6. **Clean up resources**:
   ```bash
   terraform destroy
   ```

## Security Considerations

### Single-Tier
- ⚠️ Direct internet exposure
- ⚠️ All components on one instance
- ✅ Security groups for basic protection
- ✅ SSL/TLS can be configured

### Three-Tier
- ✅ Tier-based security isolation
- ✅ Load balancer shields backend
- ✅ RDS with encryption at rest
- ✅ Multi-AZ for redundancy
- ⚠️ Application tiers may have public IPs (configurable)

### DMZ-Based
- ✅ Complete private subnet isolation
- ✅ WAF for application-layer protection
- ✅ Defense in depth strategy
- ✅ Bastion host for secure access
- ✅ NAT Gateway for controlled outbound
- ✅ Zero direct internet access to apps
- ✅ Compliance-ready architecture

## Customization

Each architecture is built with modular Terraform code, allowing easy customization:

- Modify `variables.tf` to change instance types, CIDR blocks, or region
- Edit security group rules in the `security_group` module
- Adjust Auto Scaling parameters in ASG modules
- Add additional tiers or components as needed

## Best Practices

1. **Always review** `terraform plan` before applying
2. **Use remote state** (S3 + DynamoDB) for team collaboration
3. **Enable versioning** on S3 buckets for state files
4. **Implement proper tagging** for resource management
5. **Use separate AWS accounts** for dev/staging/production
6. **Enable CloudWatch logs** for monitoring and debugging
7. **Regularly update** Terraform and provider versions
8. **Store secrets** in AWS Secrets Manager or SSM Parameter Store
