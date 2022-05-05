am5.ready(function () {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  let rootLineChart = am5.Root.new("amcharts-line-chart");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  rootLineChart.setThemes([am5themes_Animated.new(rootLineChart)]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  let chart = rootLineChart.container.children.push(
    am5xy.XYChart.new(rootLineChart, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
    })
  );

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  let cursor = chart.set(
    "cursor",
    am5xy.XYCursor.new(rootLineChart, {
      behavior: "none",
    })
  );
  cursor.lineY.set("visible", false);

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  let xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(rootLineChart, {
      renderer: am5xy.AxisRendererX.new(rootLineChart, {
        minGridDistance: 50,
      }),
      categoryField: "month",
      tooltip: am5.Tooltip.new(rootLineChart, {}),
    })
  );

  let yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(rootLineChart, {
      renderer: am5xy.AxisRendererY.new(rootLineChart, {}),
    })
  );

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  let series = chart.series.push(
    am5xy.LineSeries.new(rootLineChart, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "count",
      categoryXField: "month",
      tooltip: am5.Tooltip.new(rootLineChart, {
        labelText: "{valueY}",
      }),
    })
  );

  userCreated.then((response) => {
    // Set data
    const dataSeries = response.map((data) => {
      return {
        month: data.month,
        count: data.count,
      };
    });

    series.data.setAll(dataSeries);
    xAxis.data.setAll(dataSeries);
    series.appear(1000);
    chart.appear(1000, 100);
  });
});

am5.ready(function () {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  let rootBar = am5.Root.new("amcharts-bar-chart");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  rootBar.setThemes([am5themes_Animated.new(rootBar)]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  let chart = rootBar.container.children.push(
    am5xy.XYChart.new(rootBar, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
    })
  );

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  let cursor = chart.set("cursor", am5xy.XYCursor.new(rootBar, {}));
  cursor.lineY.set("visible", false);

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  let xRenderer = am5xy.AxisRendererX.new(rootBar, {
    minGridDistance: 30,
  });
  xRenderer.labels.template.setAll({
    rotation: -90,
    centerY: am5.p50,
    centerX: am5.p100,
    paddingRight: 15,
  });

  let xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(rootBar, {
      maxDeviation: 0.3,
      categoryField: "month",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(rootBar, {}),
    })
  );

  let yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(rootBar, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(rootBar, {}),
    })
  );

  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  let series = chart.series.push(
    am5xy.ColumnSeries.new(rootBar, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "count",
      sequencedInterpolation: true,
      categoryXField: "month",
      tooltip: am5.Tooltip.new(rootBar, {
        labelText: "{valueY}",
      }),
    })
  );

  series.columns.template.setAll({
    cornerRadiusTL: 5,
    cornerRadiusTR: 5,
  });
  series.columns.template.adapters.add("fill", function (fill, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  series.columns.template.adapters.add("stroke", function (stroke, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  productSales.then((response) => {
    // Set data
    const dataSeries = response.map((data) => {
      return {
        month: data.month,
        count: data.count,
      };
    });

    series.data.setAll(dataSeries);
    xAxis.data.setAll(dataSeries);
    series.appear(1000);
    chart.appear(1000, 100);
  });
});

am5.ready(function () {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  let rootPie = am5.Root.new("amcharts-pie-chart");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  rootPie.setThemes([am5themes_Animated.new(rootPie)]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  let chart = rootPie.container.children.push(
    am5percent.PieChart.new(rootPie, {
      endAngle: 270,
    })
  );

  // Create series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  let series = chart.series.push(
    am5percent.PieSeries.new(rootPie, {
      valueField: "value",
      categoryField: "category",
      endAngle: 270,
    })
  );

  series.states.create("hidden", {
    endAngle: -90,
  });

  // Set data
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data

  userPurchased.then((response) => {
    const dataSeries = [
      {
        category: "Total Users",
        value: response.total_users,
      },
      {
        category: "Total Purchases",
        value: response.total_purchased,
      },
      {
        category: "Purchase Rate",
        value: response.purchased_percentage,
      },
    ];

    series.data.setAll(dataSeries);

    series.appear(1000, 100);
  });
});
