function forceSplitSettings() {
    const settingsUrl = "intent:#Intent;action=android.settings.SETTINGS;S.android.intent.extra.WINDOW_MODE=5;launchFlags=0x10008000;end";
    window.location.href = settingsUrl;
}
