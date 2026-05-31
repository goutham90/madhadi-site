#!/usr/bin/env python3
from playwright.sync_api import sync_playwright
import time

ACCOUNT_ID = "40b10a64c3b832cd2aae3a4673134969"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False, slow_mo=200)
    context = browser.new_context(viewport={"width": 1280, "height": 900})
    page = context.new_page()

    # Go straight to the Pages creation page
    page.goto(f"https://dash.cloudflare.com/{ACCOUNT_ID}/pages")
    print("Browser is open. Log in if needed, then do the Pages setup.")
    print("Browser will stay open for 10 minutes.")

    # Keep browser open for 10 minutes
    time.sleep(600)
    browser.close()
