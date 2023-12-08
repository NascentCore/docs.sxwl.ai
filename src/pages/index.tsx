import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index/index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container" style={{ height: 200, paddingTop: 100 }}>
        <Heading as="h1" className="hero__title" style={{ fontSize: 35 }}>
          算想云 Serverless 大模型训推云服务
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/cloud/cp-user-guide"
          >
            算想云使用指南
          </Link>
        </div>
      </div>
      <div className="container" style={{ height: 200, paddingTop: 100 }}>
        <Heading as="h1" className="hero__title" style={{ fontSize: 35 }}>
          三千平台：私有化部署云原生大模型训推软件平台
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/3k"
          >
            三千平台使用指南
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
