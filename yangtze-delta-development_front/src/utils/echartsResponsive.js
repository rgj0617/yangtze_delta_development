import * as echarts from "echarts";

// 响应式断点定义
const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  laptop: 1440
};

// 获取当前设备类型
export const getDeviceType = () => {
  const width = window.innerWidth;
  if (width < BREAKPOINTS.mobile) return 'mobile';
  if (width < BREAKPOINTS.tablet) return 'tablet';
  if (width < BREAKPOINTS.laptop) return 'laptop';
  return 'desktop';
};

// 获取响应式字体大小配置
export const getResponsiveFontSizes = (deviceType = getDeviceType()) => {
  const fontSizes = {
    mobile: {
      title: 14,
      subtitle: 12,
      axisLabel: 10,
      legend: 10,
      tooltip: 12
    },
    tablet: {
      title: 16,
      subtitle: 14,
      axisLabel: 12,
      legend: 12,
      tooltip: 14
    },
    laptop: {
      title: 18,
      subtitle: 16,
      axisLabel: 14,
      legend: 14,
      tooltip: 16
    },
    desktop: {
      title: 20,
      subtitle: 18,
      axisLabel: 16,
      legend: 16,
      tooltip: 18
    }
  };
  return fontSizes[deviceType];
};

// 获取响应式间距配置
export const getResponsiveSpacing = (deviceType = getDeviceType()) => {
  const spacing = {
    mobile: {
      grid: { top: 40, right: 20, bottom: 40, left: 40 },
      legend: { itemGap: 8, itemWidth: 20, itemHeight: 12 },
      dataZoom: { height: 20 }
    },
    tablet: {
      grid: { top: 50, right: 30, bottom: 50, left: 50 },
      legend: { itemGap: 10, itemWidth: 25, itemHeight: 14 },
      dataZoom: { height: 25 }
    },
    laptop: {
      grid: { top: 60, right: 40, bottom: 60, left: 60 },
      legend: { itemGap: 12, itemWidth: 30, itemHeight: 16 },
      dataZoom: { height: 30 }
    },
    desktop: {
      grid: { top: 80, right: 60, bottom: 80, left: 80 },
      legend: { itemGap: 15, itemWidth: 35, itemHeight: 18 },
      dataZoom: { height: 35 }
    }
  };
  return spacing[deviceType];
};

// 获取响应式图表高度
export const getResponsiveChartHeight = (deviceType = getDeviceType()) => {
  const heights = {
    mobile: 300,
    tablet: 350,
    laptop: 400,
    desktop: 450
  };
  return heights[deviceType];
};

// 应用响应式配置到ECharts选项
export const applyResponsiveConfig = (option, deviceType = getDeviceType()) => {
  const fontSizes = getResponsiveFontSizes(deviceType);
  const spacing = getResponsiveSpacing(deviceType);

  // 深拷贝选项以避免修改原始对象
  const responsiveOption = JSON.parse(JSON.stringify(option));

  // 应用标题响应式配置
  if (responsiveOption.title) {
    responsiveOption.title.textStyle = {
      ...responsiveOption.title.textStyle,
      fontSize: fontSizes.title
    };
    if (responsiveOption.title.subtextStyle) {
      responsiveOption.title.subtextStyle.fontSize = fontSizes.subtitle;
    }
  }

  // 应用网格响应式配置
  if (responsiveOption.grid) {
    responsiveOption.grid = {
      ...responsiveOption.grid,
      ...spacing.grid
    };
  } else {
    responsiveOption.grid = spacing.grid;
  }

  // 应用图例响应式配置
  if (responsiveOption.legend) {
    responsiveOption.legend = {
      ...responsiveOption.legend,
      textStyle: {
        ...responsiveOption.legend.textStyle,
        fontSize: fontSizes.legend
      },
      ...spacing.legend
    };
  }

  // 应用坐标轴响应式配置
  if (responsiveOption.xAxis) {
    const xAxisArray = Array.isArray(responsiveOption.xAxis) ? responsiveOption.xAxis : [responsiveOption.xAxis];
    xAxisArray.forEach(axis => {
      if (axis.axisLabel) {
        axis.axisLabel.fontSize = fontSizes.axisLabel;
      }
      if (axis.nameTextStyle) {
        axis.nameTextStyle.fontSize = fontSizes.axisLabel;
      }
    });
  }

  if (responsiveOption.yAxis) {
    const yAxisArray = Array.isArray(responsiveOption.yAxis) ? responsiveOption.yAxis : [responsiveOption.yAxis];
    yAxisArray.forEach(axis => {
      if (axis.axisLabel) {
        axis.axisLabel.fontSize = fontSizes.axisLabel;
      }
      if (axis.nameTextStyle) {
        axis.nameTextStyle.fontSize = fontSizes.axisLabel;
      }
    });
  }

  // 应用提示框响应式配置
  if (responsiveOption.tooltip) {
    responsiveOption.tooltip.textStyle = {
      ...responsiveOption.tooltip.textStyle,
      fontSize: fontSizes.tooltip
    };
  }

  // 应用数据缩放响应式配置
  if (responsiveOption.dataZoom) {
    const dataZoomArray = Array.isArray(responsiveOption.dataZoom) ? responsiveOption.dataZoom : [responsiveOption.dataZoom];
    dataZoomArray.forEach(zoom => {
      if (zoom.type === 'slider') {
        zoom.height = spacing.dataZoom.height;
        zoom.textStyle = {
          ...zoom.textStyle,
          fontSize: fontSizes.axisLabel
        };
      }
    });
  }

  return responsiveOption;
};

// 创建响应式ECharts实例
export const createResponsiveChart = (container, option) => {
  if (!container) return null;

  const chart = echarts.init(container);
  const deviceType = getDeviceType();
  const responsiveOption = applyResponsiveConfig(option, deviceType);
  
  chart.setOption(responsiveOption);

  // 监听窗口大小变化
  const handleResize = () => {
    const newDeviceType = getDeviceType();
    const newResponsiveOption = applyResponsiveConfig(option, newDeviceType);
    chart.setOption(newResponsiveOption, true);
    chart.resize();
  };

  window.addEventListener('resize', handleResize);

  // 返回图表实例和清理函数
  return {
    chart,
    dispose: () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    },
    updateOption: (newOption) => {
      const deviceType = getDeviceType();
      const responsiveOption = applyResponsiveConfig(newOption, deviceType);
      chart.setOption(responsiveOption, true);
    }
  };
};

// 为现有图表添加响应式支持
export const makeChartResponsive = (chartInstance, originalOption) => {
  if (!chartInstance || !originalOption) return null;

  const handleResize = () => {
    const deviceType = getDeviceType();
    const responsiveOption = applyResponsiveConfig(originalOption, deviceType);
    chartInstance.setOption(responsiveOption, true);
    chartInstance.resize();
  };

  // 立即应用响应式配置
  handleResize();

  window.addEventListener('resize', handleResize);

  return {
    dispose: () => {
      window.removeEventListener('resize', handleResize);
    },
    updateOption: (newOption) => {
      const deviceType = getDeviceType();
      const responsiveOption = applyResponsiveConfig(newOption, deviceType);
      chartInstance.setOption(responsiveOption, true);
    }
  };
};

// 获取响应式容器样式
export const getResponsiveContainerStyle = (deviceType = getDeviceType()) => {
  const height = getResponsiveChartHeight(deviceType);
  return {
    width: '100%',
    height: `${height}px`,
    minHeight: `${height}px`
  };
};