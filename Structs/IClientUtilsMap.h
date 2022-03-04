class IClientUtilsMap
{
public:
    virtual unknown_ret GetInstallPath() = 0;
    virtual unknown_ret GetUserBaseFolderInstallImage() = 0;
    virtual unknown_ret GetManagedContentRoot() = 0;
    virtual unknown_ret GetSecondsSinceAppActive() = 0;
    virtual unknown_ret GetSecondsSinceComputerActive() = 0;
    virtual unknown_ret SetComputerActive() = 0;
    virtual unknown_ret GetConnectedUniverse() = 0;
    virtual unknown_ret GetSteamRealm() = 0;
    virtual unknown_ret GetServerRealTime() = 0;
    virtual unknown_ret GetIPCountry() = 0;
    virtual unknown_ret GetImageSize(void*,void*,void*) = 0;
    virtual unknown_ret GetImageRGBA(void*,void*,void*) = 0;
    virtual unknown_ret GetNumRunningApps() = 0;
    virtual unknown_ret GetCurrentBatteryPower() = 0;
    virtual unknown_ret GetBatteryInformation(void*,void*) = 0;
    virtual unknown_ret SetOfflineMode(void*) = 0;
    virtual unknown_ret GetOfflineMode() = 0;
    virtual unknown_ret SetAppIDForCurrentPipe(void*,void*) = 0;
    virtual unknown_ret GetAppID() = 0;
    virtual unknown_ret SetAPIDebuggingActive(void*,void*) = 0;
    virtual unknown_ret AllocPendingAPICallHandle() = 0;
    virtual unknown_ret IsAPICallCompleted(void*,void*,void*) = 0;
    virtual unknown_ret GetAPICallFailureReason(void*,void*) = 0;
    virtual unknown_ret GetAPICallResult(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetAPICallResultWithoutPostingCallback(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SignalAppsToShutDown() = 0;
    virtual unknown_ret SignalServiceAppsToDisconnect() = 0;
    virtual unknown_ret TerminateAllApps(void*) = 0;
    virtual unknown_ret GetCellID() = 0;
    virtual unknown_ret BIsGlobalInstance() = 0;
    virtual unknown_ret CheckFileSignature(void*) = 0;
    virtual unknown_ret GetBuildID() = 0;
    virtual unknown_ret SetCurrentUIMode(void*) = 0;
    virtual unknown_ret GetCurrentUIMode() = 0;
    virtual unknown_ret ShutdownLauncher(void*,void*) = 0;
    virtual unknown_ret SetLauncherType(void*) = 0;
    virtual unknown_ret GetLauncherType() = 0;
    virtual unknown_ret ShowGamepadTextInput(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetEnteredGamepadTextLength() = 0;
    virtual unknown_ret GetEnteredGamepadTextInput(void*,void*) = 0;
    virtual unknown_ret GamepadTextInputClosed(void*,void*,void*) = 0;
    virtual unknown_ret SetSpew(void*,void*,void*) = 0;
    virtual unknown_ret BDownloadsDisabled() = 0;
    virtual unknown_ret SetFocusedWindow(void*,void*,void*) = 0;
    virtual unknown_ret GetSteamUILanguage() = 0;
    virtual unknown_ret CheckSteamReachable() = 0;
    virtual unknown_ret SetLastGameLaunchMethod(void*) = 0;
    virtual unknown_ret SetVideoAdapterInfo(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetControllerOverrideMode(void*,void*,void*) = 0;
    virtual unknown_ret SetOverlayWindowFocusForPipe(void*,void*,void*) = 0;
    virtual unknown_ret GetGameOverlayUIInstanceFocusGameID(void*,void*) = 0;
    virtual unknown_ret SetControllerConfigFileForAppID(void*,void*) = 0;
    virtual unknown_ret GetControllerConfigFileForAppID(void*,void*,void*) = 0;
    virtual unknown_ret IsSteamRunningInVR() = 0;
    virtual unknown_ret BIsRunningOnAlienwareAlpha() = 0;
    virtual unknown_ret StartVRDashboard() = 0;
    virtual unknown_ret IsVRHeadsetStreamingEnabled(void*) = 0;
    virtual unknown_ret SetVRHeadsetStreamingEnabled(void*,void*) = 0;
    virtual unknown_ret GenerateSupportSystemReport() = 0;
    virtual unknown_ret GetSupportSystemReport(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetAppIdForPid(void*,void*) = 0;
    virtual unknown_ret SetClientUIProcess() = 0;
    virtual unknown_ret BIsClientUIInForeground() = 0;
    virtual unknown_ret SetOverlayChatBrowserInfo(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret ClearOverlayChatBrowserInfo(void*) = 0;
    virtual unknown_ret GetOverlayChatBrowserInfo(void*,void*,void*) = 0;
    virtual unknown_ret DispatchClientUINotification(void*,void*,void*) = 0;
    virtual unknown_ret RespondToClientUINotification(void*,void*,void*) = 0;
    virtual unknown_ret DispatchClientUICommand(void*,void*) = 0;
    virtual unknown_ret DispatchComputerActiveStateChange() = 0;
    virtual unknown_ret DispatchOpenURLInClient(void*,void*,void*) = 0;
    virtual unknown_ret UpdateWideVineCDM(void*) = 0;
    virtual unknown_ret DispatchClearAllBrowsingData() = 0;
    virtual unknown_ret DispatchClientSettingsChanged() = 0;
    virtual unknown_ret DispatchClientPostMessage(void*,void*,void*) = 0;
    virtual unknown_ret IsSteamChina() = 0;
    virtual unknown_ret NeedsSteamChinaWorkshop(void*) = 0;
    virtual unknown_ret InitFilterText(void*,void*) = 0;
    virtual unknown_ret FilterText(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetIPv6ConnectivityState(void*) = 0;
    virtual unknown_ret ScheduleConnectivityTest(void*,void*) = 0;
    virtual unknown_ret GetConnectivityTestState(void*) = 0;
    virtual unknown_ret GetCaptivePortalURL() = 0;
    virtual unknown_ret RecordSteamInterfaceCreation(void*,void*) = 0;
    virtual unknown_ret StartRuntimeInformationGathering() = 0;
    virtual unknown_ret GetRuntimeInformation() = 0;
    virtual unknown_ret GetCloudGamingPlatform() = 0;
    virtual unknown_ret BGetMacAddresses(void*,void*,void*) = 0;
    virtual unknown_ret BGetDiskSerialNumber(void*,void*) = 0;
    virtual unknown_ret GetSteamEnvironmentForApp(void*,void*,void*) = 0;
    virtual unknown_ret TestHTTP(void*) = 0;
    virtual unknown_ret DumpJobs(void*) = 0;
    virtual unknown_ret ShowFloatingGamepadTextInput(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret DismissFloatingGamepadTextInput() = 0;
    virtual unknown_ret FloatingGamepadTextInputDismissed() = 0;
    virtual unknown_ret SetGameLauncherMode(void*,void*) = 0;
};