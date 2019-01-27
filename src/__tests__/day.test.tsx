import * as React from "react";
import { cleanup, render } from "react-testing-library";
import { Day } from "../day";
import { theme } from "../utils/testUtils";
import "jest-styled-components";

const mockDaysEvent = jest.fn();

describe("day test ", () => {
  afterEach(cleanup);
  test("day test ", () => {
    const table = document.createElement("tr");
    const { container } = render(
      <Day
        theme={theme}
        daysEvent={mockDaysEvent}
        holiday={false}
        startEndRange={false}
      />,
      {
        container: table,
      },
    );
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      theme.daysBackColor,
    );
    expect(container.firstChild).toHaveStyleRule("color", theme.daysColor);
  });

  test("holiday test ", () => {
    const table = document.createElement("tr");
    const { container } = render(
      <Day
        theme={theme}
        daysEvent={mockDaysEvent}
        holiday
        startEndRange={false}
      />,
      {
        container: table,
      },
    );
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      theme.holidaysBackColor,
    );
    expect(container.firstChild).toHaveStyleRule("color", theme.holidaysColor);
  });
});

describe("startEndRange tests ", () => {
  afterEach(cleanup);
  const table = document.createElement("tr");
  test("start range ", () => {
    const { container } = render(
      <Day
        theme={theme}
        holiday={false}
        daysEvent={mockDaysEvent}
        startEndRange={{ status: "startRange" }}
      />,
      {
        container: table,
      },
    );
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      theme.startRangeBackColor,
    );
  });

  test("continue range ", () => {
    const { container } = render(
      <Day
        theme={theme}
        holiday={false}
        daysEvent={mockDaysEvent}
        startEndRange={{ status: "continueRange" }}
      />,
      {
        container: table,
      },
    );
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      theme.continueRangeBackColor,
    );
  });
});
