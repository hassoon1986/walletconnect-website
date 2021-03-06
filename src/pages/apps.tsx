import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Grid from "../components/Grid";
import WALLETS from "../constants/wallets";
import DAPPS from "../constants/dapps";

const SIndexPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 0 32px;
  padding-top: 30px;
`;

const SBrandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;
const SBranding = styled.h1`
  font-size: 35px;
  font-weight: 500;
  text-align: center;
`;

const SSection = styled.section`
  position: relative;
  width: 100%;
  z-index: 0;
  margin-bottom: 40px;
`;

const SApp = styled.div`
  width: 100%;
`;

interface IAppIconStyleProps {
  cropCircle?: boolean;
}

// eslint-disable-next-line no-mixed-operators
const SAppIcon = styled.div<IAppIconStyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: ${({ cropCircle }) => (cropCircle ? "50%" : "initial")};
  }
`;

const SAppName = styled.div`
  font-weight: bold;
`;

const IndexPage = (props: any) => (
  <Layout location={props.location}>
    <SIndexPage>
      <SBrandingWrapper>
        <SBranding>{`Wallets`}</SBranding>
      </SBrandingWrapper>
      <SSection>
        <Grid itemMaxWidth={200} gap={30}>
          {WALLETS.map(app => (
            <a
              key={app.name}
              href={app.url}
              target="blank"
              rel="noreferrer noopener"
            >
              <SApp>
                <SAppIcon cropCircle={app.style.cropCircle}>
                  <img src={app.icon} alt={app.name} />
                </SAppIcon>
                <SAppName>{app.name}</SAppName>
              </SApp>
            </a>
          ))}
        </Grid>
      </SSection>
      <SBrandingWrapper>
        <SBranding>{`Dapps`}</SBranding>
      </SBrandingWrapper>
      <SSection>
        <Grid itemMaxWidth={200} gap={30}>
          {DAPPS.map(app => (
            <a
              key={app.name}
              href={app.url}
              target="blank"
              rel="noreferrer noopener"
            >
              <SApp>
                <SAppIcon cropCircle={app.style.cropCircle}>
                  <img src={app.icon} alt={app.name} />
                </SAppIcon>
                <SAppName>{app.name}</SAppName>
              </SApp>
            </a>
          ))}
        </Grid>
      </SSection>
    </SIndexPage>
  </Layout>
);

export default IndexPage;
