import { test, expect } from "@playwright/test";

// TODO replace these with tic tac toe e2e tests

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("game draw", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("playerName").click();
  await page.getByTestId("playerName").fill("Bubbi");
  await page.getByTestId("playerName2").click();
  await page.getByTestId("playerName2").fill("Byggir");
  await page.getByRole("button", { name: "Start Game" }).click();

  const cell0 = await page.getByTestId("cell-0");
  const cell1 = await page.getByTestId("cell-1");
  const cell2 = await page.getByTestId("cell-2");
  const cell3 = await page.getByTestId("cell-3");
  const cell4 = await page.getByTestId("cell-4");
  const cell5 = await page.getByTestId("cell-5");
  const cell6 = await page.getByTestId("cell-6");
  const cell7 = await page.getByTestId("cell-7");
  const cell8 = await page.getByTestId("cell-8");
  const draw = await page.getByTestId("draw");

  await cell0.click();
  await expect(cell0).toContainText("❌");

  await cell1.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");

  await cell2.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell2).toContainText("❌");

  await cell8.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell2).toContainText("❌");
  await expect(cell8).toContainText("⭕");

  await cell3.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell2).toContainText("❌");
  await expect(cell8).toContainText("⭕");
  await expect(cell3).toContainText("❌");

  await cell5.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell2).toContainText("❌");
  await expect(cell8).toContainText("⭕");
  await expect(cell3).toContainText("❌");
  await expect(cell5).toContainText("⭕");

  await cell4.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell2).toContainText("❌");
  await expect(cell8).toContainText("⭕");
  await expect(cell3).toContainText("❌");
  await expect(cell5).toContainText("⭕");
  await expect(cell4).toContainText("❌");

  await cell6.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell2).toContainText("❌");
  await expect(cell8).toContainText("⭕");
  await expect(cell3).toContainText("❌");
  await expect(cell5).toContainText("⭕");
  await expect(cell4).toContainText("❌");
  await expect(cell6).toContainText("⭕");

  await cell7.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell2).toContainText("❌");
  await expect(cell8).toContainText("⭕");
  await expect(cell3).toContainText("❌");
  await expect(cell5).toContainText("⭕");
  await expect(cell4).toContainText("❌");
  await expect(cell6).toContainText("⭕");
  await expect(cell7).toContainText("❌");

  await expect(draw).toContainText("ITS A DRAW");
});
test("X is the winner", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("playerName").click();
  await page.getByTestId("playerName").fill("Bubbi");
  await page.getByTestId("playerName2").click();
  await page.getByTestId("playerName2").fill("Byggir");
  await page.getByRole("button", { name: "Start Game" }).click();

  const cell0 = await page.getByTestId("cell-0");
  const cell1 = await page.getByTestId("cell-1");
  const cell2 = await page.getByTestId("cell-2");
  const cell3 = await page.getByTestId("cell-3");
  const cell6 = await page.getByTestId("cell-6");
  const Winner = await page.getByTestId("Winner");

  await cell0.click();
  await expect(cell0).toContainText("❌");

  await cell1.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");

  await cell3.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell3).toContainText("❌");

  await cell2.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell3).toContainText("❌");
  await expect(cell2).toContainText("⭕");

  await cell6.click();
  await expect(cell0).toContainText("❌");
  await expect(cell1).toContainText("⭕");
  await expect(cell3).toContainText("❌");
  await expect(cell2).toContainText("⭕");
  await expect(cell6).toContainText("❌");

  await expect(Winner).toContainText("🎉🎊🍾🏆");
});
