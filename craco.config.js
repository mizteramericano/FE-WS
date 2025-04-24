module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // ลบ loader ที่เกี่ยวกับ source-map-loader ออก
        webpackConfig.module.rules = webpackConfig.module.rules.map(rule => {
          if (rule.oneOf) {
            rule.oneOf = rule.oneOf.filter(loader => {
              return !(loader.loader && loader.loader.includes('source-map-loader'));
            });
          }
          return rule;
        });
        return webpackConfig;
      }
    }
  };
  