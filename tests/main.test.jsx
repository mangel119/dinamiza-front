import React from "react";
import App from "@/App";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

describe("Renderizado inicial", () => {
  it("Renderiza el Inicio", () => {
    render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>,
  );
    const inicio = screen.getAllByText(/Inicio/i);
    expect(inicio[0]).toBeDefined();
  });
  it("Renderiza Convocatorias Generales", () => {
    render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>,
  );
    const generales = screen.getAllByText(/Talento TIC/i);
    expect(generales[0]).toBeDefined();
  });
});
