import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  // NgxLoggerLevels: TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
  logLevel: NgxLoggerLevel.OFF,
  API_URL: 'https://bmdj79jt7f.execute-api.us-east-1.amazonaws.com/wab-prod',
  VAPID_KEY: 'BNig6YilK-kYPDPBodF3nmX5q8LLd-wXjtOAsavF5K97a-BZ62P6iy9tjaZMKxDk-aSBExafPDEWotyYJQ9waXM',
  cognitoRegion: 'us-east-1',
  cognitoDomainName: 'wab-prod-adaptadmin',
  s3PublicAssetsDomainName: 'wab-prod-adaptpublicassetsbucket',
  clientId: '51q7888vujhv3qa28m98vu0jaf',
  contentRoot: 'assets/text',
  contentFileName: 'admin-content-text.json',
  appDomain: 'ospi-wa-admin.adaptdata.org',
  enforceLogin: true,
  envLabel: 'Prod',
  enforceRole: true,
  callbackUrl: 'https://ospi-wa-admin.adaptdata.org/auth/redirect',
  Cognito: {
    userPoolId: 'us-east-1_I4FzXJwQM',
    userPoolClientId: '51q7888vujhv3qa28m98vu0jaf',
  },
  loginContent: 'assets/content-labels.json',
  pagesContent: 'assets/text/admin-content-text.json',
  organizationName: 'Office of the Superintendent of Public Instruction (OSPI)',
  logoPath: 'assets/shared/logos/states/wa',
  logoExtension: 'png',
  logoStyleClass: 'width-card',
  copyrightText: 'The State of Washington.',
};
