# 배포 파이프라인 설명

#### GitHub Actions와 AWS 서비스를 사용하여 정적 웹사이트를 자동으로 배포하는 CI/CD 파이프라인을 구축.

## 다이어그램

전체 파이프라인의 흐름을 나타낸 다이어그램.
![Deployment Pipeline](docs/images/deployment-diagram.png)

## 주요 구성 요소

1. **GitHub Actions**: CI/CD 파이프라인 실행.
2. **AWS S3**: 빌드된 정적 파일 저장.
3. **AWS CloudFront**: 콘텐츠 배포
4. **AWS Route 53**: 사용자 지정 도메인 관리.

## 사용 방법

1. git clone https://github.com/sangwon1222/aws-nextjs-deploy.git
2. main 브랜치에 코드 push => GitHub Actions 실행.
3. 배포된 결과를 "https://leesw.kr"에서 확인

## 주요 링크

1. S3 버킷 웹사이트 엔드포인트:
