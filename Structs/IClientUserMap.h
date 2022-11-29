class IClientUserMap
{
public:
    virtual unknown_ret Unknown_5313856() = 0;
    virtual unknown_ret LogOn(void*,void*) = 0;
    virtual unknown_ret InvalidateCredentials() = 0;
    virtual unknown_ret LogOff() = 0;
    virtual unknown_ret BLoggedOn() = 0;
    virtual unknown_ret GetLogonState() = 0;
    virtual unknown_ret BConnected() = 0;
    virtual unknown_ret BInitiateReconnect() = 0;
    virtual unknown_ret EConnect() = 0;
    virtual unknown_ret BTryingToLogin() = 0;
    virtual unknown_ret GetSteamID(void*) = 0;
    virtual unknown_ret GetConsoleSteamID(void*) = 0;
    virtual unknown_ret GetClientInstanceID() = 0;
    virtual unknown_ret IsVACBanned(void*) = 0;
    virtual unknown_ret SetEmail(void*) = 0;
    virtual unknown_ret SetConfigString(void*,void*,void*) = 0;
    virtual unknown_ret GetConfigString(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetConfigInt(void*,void*,void*) = 0;
    virtual unknown_ret GetConfigInt(void*,void*,void*) = 0;
    virtual unknown_ret SetConfigBinaryBlob(void*,void*,void*) = 0;
    virtual unknown_ret GetConfigBinaryBlob(void*,void*,void*) = 0;
    virtual unknown_ret DeleteConfigKey(void*,void*) = 0;
    virtual unknown_ret GetConfigStoreKeyName(void*,void*,void*,void*) = 0;
    virtual unknown_ret InitiateGameConnection(void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret InitiateGameConnectionOld(void*,void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret TerminateGameConnection(void*,void*) = 0;
    virtual unknown_ret TerminateGame(void*,void*) = 0;
    virtual unknown_ret SetSelfAsChatDestination(void*) = 0;
    virtual unknown_ret IsPrimaryChatDestination() = 0;
    virtual unknown_ret RequestLegacyCDKey(void*) = 0;
    virtual unknown_ret AckGuestPass(void*) = 0;
    virtual unknown_ret RedeemGuestPass(void*) = 0;
    virtual unknown_ret GetGuestPassToGiveCount() = 0;
    virtual unknown_ret GetGuestPassToRedeemCount() = 0;
    virtual unknown_ret GetGuestPassToGiveInfo(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetGuestPassToGiveOut(void*) = 0;
    virtual unknown_ret GetGuestPassToRedeem(void*) = 0;
    virtual unknown_ret GetGuestPassToRedeemInfo(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetGuestPassToRedeemSenderName(void*,void*,void*) = 0;
    virtual unknown_ret GetNumAppsInGuestPassesToRedeem() = 0;
    virtual unknown_ret GetAppsInGuestPassesToRedeem(void*,void*) = 0;
    virtual unknown_ret GetCountUserNotifications() = 0;
    virtual unknown_ret GetCountUserNotification(void*) = 0;
    virtual unknown_ret RequestStoreAuthURL(void*) = 0;
    virtual unknown_ret SetLanguage(void*) = 0;
    virtual unknown_ret TrackAppUsageEvent(void*,void*,void*) = 0;
    virtual unknown_ret RaiseConnectionPriority(void*,void*) = 0;
    virtual unknown_ret ResetConnectionPriority(void*) = 0;
    virtual unknown_ret BHasCachedCredentials(void*) = 0;
    virtual unknown_ret SetAccountNameForCachedCredentialLogin(void*,void*) = 0;
    virtual unknown_ret DestroyCachedCredentials(void*) = 0;
    virtual unknown_ret GetCurrentWebAuthToken(void*,void*) = 0;
    virtual unknown_ret RequestWebAuthToken() = 0;
    virtual unknown_ret SetLoginInformation(void*,void*,void*) = 0;
    virtual unknown_ret SetTwoFactorCode(void*) = 0;
    virtual unknown_ret SetLoginToken(void*,void*) = 0;
    virtual unknown_ret GetLoginTokenID() = 0;
    virtual unknown_ret ClearAllLoginInformation() = 0;
    virtual unknown_ret BEnableEmbeddedClient(void*) = 0;
    virtual unknown_ret ResetEmbeddedClient(void*) = 0;
    virtual unknown_ret BHasEmbeddedClientToken(void*) = 0;
    virtual unknown_ret RequestEmbeddedClientToken(void*) = 0;
    virtual unknown_ret AuthorizeNewDevice(void*,void*,void*) = 0;
    virtual unknown_ret GetLanguage(void*,void*) = 0;
    virtual unknown_ret BIsCyberCafe() = 0;
    virtual unknown_ret BIsAcademicAccount() = 0;
    virtual unknown_ret BIsPortal2EducationAccount() = 0;
    virtual unknown_ret TrackNatTraversalStat(void*) = 0;
    virtual unknown_ret TrackSteamUsageEvent(void*,void*,void*) = 0;
    virtual unknown_ret TrackSteamGUIUsage(void*) = 0;
    virtual unknown_ret SetComputerInUse() = 0;
    virtual unknown_ret BIsGameRunning(void*) = 0;
    virtual unknown_ret BIsGameWindowReady(void*) = 0;
    virtual unknown_ret BUpdateAppOwnershipTicket(void*,void*) = 0;
    virtual unknown_ret GetCustomBinariesState(void*,void*,void*) = 0;
    virtual unknown_ret RequestCustomBinaries(void*,void*,void*,void*) = 0;
    virtual unknown_ret SetCellID(void*) = 0;
    virtual unknown_ret GetCellList(void*) = 0;
    virtual unknown_ret GetUserBaseFolder() = 0;
    virtual unknown_ret GetUserDataFolder(void*,void*,void*) = 0;
    virtual unknown_ret GetUserConfigFolder(void*,void*) = 0;
    virtual unknown_ret GetAccountName(void*,void*) = 0;
    virtual unknown_ret GetAccountName(void*,void*,void*,void*) = 0;
    virtual unknown_ret IsPasswordRemembered() = 0;
    virtual unknown_ret CheckoutSiteLicenseSeat(void*) = 0;
    virtual unknown_ret GetAvailableSeats(void*) = 0;
    virtual unknown_ret GetAssociatedSiteName() = 0;
    virtual unknown_ret BIsRunningInCafe() = 0;
    virtual unknown_ret BAllowCachedCredentialsInCafe() = 0;
    virtual unknown_ret RequiresLegacyCDKey(void*,void*) = 0;
    virtual unknown_ret GetLegacyCDKey(void*,void*,void*) = 0;
    virtual unknown_ret SetLegacyCDKey(void*,void*) = 0;
    virtual unknown_ret WriteLegacyCDKey(void*) = 0;
    virtual unknown_ret RemoveLegacyCDKey(void*) = 0;
    virtual unknown_ret RequestLegacyCDKeyFromApp(void*,void*,void*) = 0;
    virtual unknown_ret BIsAnyGameRunning() = 0;
    virtual unknown_ret GetSteamGuardDetails() = 0;
    virtual unknown_ret GetSentryFileData(void*) = 0;
    virtual unknown_ret GetTwoFactorDetails() = 0;
    virtual unknown_ret BHasTwoFactor() = 0;
    virtual unknown_ret GetEmail(void*,void*,void*) = 0;
    virtual unknown_ret Test_FakeConnectionTimeout() = 0;
    virtual unknown_ret RunInstallScript(void*,void*,void*) = 0;
    virtual unknown_ret IsInstallScriptRunning() = 0;
    virtual unknown_ret GetInstallScriptState(void*,void*,void*,void*) = 0;
    virtual unknown_ret StopInstallScript(void*) = 0;
    virtual unknown_ret SpawnProcess(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetAppOwnershipTicketLength(void*) = 0;
    virtual unknown_ret GetAppOwnershipTicketData(void*,void*,void*) = 0;
    virtual unknown_ret GetAppOwnershipTicketExtendedData(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetMarketingMessageCount() = 0;
    virtual unknown_ret GetMarketingMessage(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret MarkMarketingMessageSeen(void*,void*) = 0;
    virtual unknown_ret CheckForPendingMarketingMessages() = 0;
    virtual unknown_ret GetAuthSessionTicket(void*,void*,void*) = 0;
    virtual unknown_ret GetAuthSessionTicketV2(void*,void*,void*,void*) = 0;
    virtual unknown_ret BeginAuthSession(void*,void*,void*,void*) = 0;
    virtual unknown_ret EndAuthSession(void*,void*) = 0;
    virtual unknown_ret CancelAuthTicket(void*) = 0;
    virtual unknown_ret IsUserSubscribedAppInTicket(void*,void*,void*) = 0;
    virtual unknown_ret GetAuthSessionTicketForGameID(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret AdvertiseGame(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret RequestEncryptedAppTicket(void*,void*) = 0;
    virtual unknown_ret GetEncryptedAppTicket(void*,void*,void*) = 0;
    virtual unknown_ret GetGameBadgeLevel(void*,void*) = 0;
    virtual unknown_ret GetPlayerSteamLevel() = 0;
    virtual unknown_ret SetAccountLimited(void*) = 0;
    virtual unknown_ret BIsAccountLimited() = 0;
    virtual unknown_ret SetAccountCommunityBanned(void*) = 0;
    virtual unknown_ret BIsAccountCommunityBanned() = 0;
    virtual unknown_ret SetLimitedAccountCanInviteFriends(void*) = 0;
    virtual unknown_ret BLimitedAccountCanInviteFriends() = 0;
    virtual unknown_ret SendValidationEmail() = 0;
    virtual unknown_ret BGameConnectTokensAvailable() = 0;
    virtual unknown_ret NumGamesRunning() = 0;
    virtual unknown_ret GetRunningGameID(void*,void*) = 0;
    virtual unknown_ret GetRunningGamePID(void*) = 0;
    virtual unknown_ret RaiseWindowForGame(void*) = 0;
    virtual unknown_ret GetAccountSecurityPolicyFlags() = 0;
    virtual unknown_ret SetClientStat(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret VerifyPassword(void*) = 0;
    virtual unknown_ret BSupportUser() = 0;
    virtual unknown_ret BNeedsSSANextSteamLogon() = 0;
    virtual unknown_ret ClearNeedsSSANextSteamLogon() = 0;
    virtual unknown_ret BIsAppOverlayEnabled(void*) = 0;
    virtual unknown_ret BOverlayIgnoreChildProcesses(void*) = 0;
    virtual unknown_ret SetOverlayState(void*,void*) = 0;
    virtual unknown_ret NotifyOverlaySettingsChanged() = 0;
    virtual unknown_ret BIsBehindNAT() = 0;
    virtual unknown_ret GetMicroTxnAppID(void*,void*) = 0;
    virtual unknown_ret GetMicroTxnOrderID(void*,void*) = 0;
    virtual unknown_ret BGetMicroTxnPrice(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetMicroTxnSteamRealm(void*,void*) = 0;
    virtual unknown_ret GetMicroTxnLineItemCount(void*,void*) = 0;
    virtual unknown_ret BGetMicroTxnLineItem(void*,void*,void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret BIsSandboxMicroTxn(void*,void*,void*) = 0;
    virtual unknown_ret BMicroTxnRequiresCachedPmtMethod(void*,void*,void*) = 0;
    virtual unknown_ret AuthorizeMicroTxn(void*,void*,void*) = 0;
    virtual unknown_ret BGetWalletBalance(void*,void*,void*) = 0;
    virtual unknown_ret RequestMicroTxnInfo(void*,void*) = 0;
    virtual unknown_ret BMicroTxnRefundable(void*,void*) = 0;
    virtual unknown_ret BGetAppMinutesPlayed(void*,void*,void*) = 0;
    virtual unknown_ret GetAppLastPlayedTime(void*) = 0;
    virtual unknown_ret GetAppUpdateDisabledSecondsRemaining(void*) = 0;
    virtual unknown_ret BGetGuideURL(void*,void*,void*) = 0;
    virtual unknown_ret BPromptToVerifyEmail() = 0;
    virtual unknown_ret BPromptToChangePassword() = 0;
    virtual unknown_ret BAccountExtraSecurity() = 0;
    virtual unknown_ret BAccountShouldShowLockUI() = 0;
    virtual unknown_ret GetCountAuthedComputers() = 0;
    virtual unknown_ret BSteamGuardNewMachineNotification() = 0;
    virtual unknown_ret GetSteamGuardEnabledTime() = 0;
    virtual unknown_ret GetSteamGuardHistoryEntry(void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetSteamGuardNewMachineDialogResponse(void*,void*) = 0;
    virtual unknown_ret SetPhoneIsVerified(void*) = 0;
    virtual unknown_ret BIsPhoneVerified() = 0;
    virtual unknown_ret SetPhoneIsIdentifying(void*) = 0;
    virtual unknown_ret BIsPhoneIdentifying() = 0;
    virtual unknown_ret SetPhoneIsRequiringVerification(void*) = 0;
    virtual unknown_ret BIsPhoneRequiringVerification() = 0;
    virtual unknown_ret ChangeTwoFactorAuthOptions(void*) = 0;
    virtual unknown_ret Set2ndFactorAuthCode(void*,void*) = 0;
    virtual unknown_ret SetUserMachineName(void*) = 0;
    virtual unknown_ret GetUserMachineName(void*,void*) = 0;
    virtual unknown_ret GetEmailDomainFromLogonFailure(void*,void*) = 0;
    virtual unknown_ret GetAgreementSessionUrl() = 0;
    virtual unknown_ret GetDurationControl() = 0;
    virtual unknown_ret GetDurationControlForApp(void*) = 0;
    virtual unknown_ret BSetDurationControlOnlineState(void*) = 0;
    virtual unknown_ret BSetDurationControlOnlineStateForApp(void*,void*) = 0;
    virtual unknown_ret BGetDurationControlExtendedResults(void*,void*,void*) = 0;
    virtual unknown_ret BIsSubscribedApp(void*) = 0;
    virtual unknown_ret GetSubscribedApps(void*,void*,void*) = 0;
    virtual unknown_ret RegisterActivationCode(void*) = 0;
    virtual unknown_ret AckSystemIM(void*,void*) = 0;
    virtual unknown_ret RequestSpecialSurvey(void*) = 0;
    virtual unknown_ret SendSpecialSurveyResponse(void*,void*,void*) = 0;
    virtual unknown_ret RequestNotifications() = 0;
    virtual unknown_ret GetAppOwnershipInfo(void*,void*,void*,void*) = 0;
    virtual unknown_ret SendGameWebCallback(void*,void*) = 0;
    virtual unknown_ret BIsStreamingUIToRemoteDevice() = 0;
    virtual unknown_ret BIsCurrentlyNVStreaming() = 0;
    virtual unknown_ret OnBigPictureForStreamingStartResult(void*,void*) = 0;
    virtual unknown_ret OnBigPictureForStreamingDone() = 0;
    virtual unknown_ret OnBigPictureForStreamingRestarting() = 0;
    virtual unknown_ret StopStreaming(void*) = 0;
    virtual unknown_ret LockParentalLock() = 0;
    virtual unknown_ret UnlockParentalLock(void*) = 0;
    virtual unknown_ret BIsParentalLockEnabled() = 0;
    virtual unknown_ret BIsParentalLockLocked() = 0;
    virtual unknown_ret BlockApp(void*) = 0;
    virtual unknown_ret UnblockApp(void*) = 0;
    virtual unknown_ret BIsAppBlocked(void*) = 0;
    virtual unknown_ret BIsAppInBlockList(void*) = 0;
    virtual unknown_ret BlockFeature(void*) = 0;
    virtual unknown_ret UnblockFeature(void*) = 0;
    virtual unknown_ret BIsFeatureBlocked(void*) = 0;
    virtual unknown_ret BIsFeatureInBlockList(void*) = 0;
    virtual unknown_ret GetParentalUnlockTime() = 0;
    virtual unknown_ret BGetRecoveryEmail(void*,void*) = 0;
    virtual unknown_ret RequestParentalRecoveryEmail() = 0;
    virtual unknown_ret BIsLockFromSiteLicense() = 0;
    virtual unknown_ret BGetSerializedParentalSettings(void*) = 0;
    virtual unknown_ret BSetParentalSettings(void*) = 0;
    virtual unknown_ret BDisableParentalSettings() = 0;
    virtual unknown_ret BGetParentalWebToken(void*,void*) = 0;
    virtual unknown_ret GetCommunityPreference(void*) = 0;
    virtual unknown_ret SetCommunityPreference(void*,void*) = 0;
    virtual unknown_ret GetTextFilterSetting() = 0;
    virtual unknown_ret BTextFilterIgnoresFriends() = 0;
    virtual unknown_ret CanLogonOffline() = 0;
    virtual unknown_ret LogOnOffline(void*) = 0;
    virtual unknown_ret ValidateOfflineLogonTicket(void*) = 0;
    virtual unknown_ret BGetOfflineLogonTicket(void*,void*) = 0;
    virtual unknown_ret UploadLocalClientLogs() = 0;
    virtual unknown_ret SetAsyncNotificationEnabled(void*,void*) = 0;
    virtual unknown_ret BIsOtherSessionPlaying(void*) = 0;
    virtual unknown_ret BKickOtherPlayingSession() = 0;
    virtual unknown_ret BIsAccountLockedDown() = 0;
    virtual unknown_ret ClearAndSetAppTags(void*,void*) = 0;
    virtual unknown_ret RemoveAppTag(void*,void*) = 0;
    virtual unknown_ret AddAppTag(void*,void*) = 0;
    virtual unknown_ret ClearAppTags(void*) = 0;
    virtual unknown_ret SetAppHidden(void*,void*) = 0;
    virtual unknown_ret RequestAccountLinkInfo() = 0;
    virtual unknown_ret RequestSurveySchedule() = 0;
    virtual unknown_ret RequestNewSteamAnnouncementState() = 0;
    virtual unknown_ret UpdateSteamAnnouncementLastRead(void*,void*,void*) = 0;
    virtual unknown_ret GetMarketEligibility() = 0;
    virtual unknown_ret UpdateGameVrDllState(void*,void*,void*) = 0;
    virtual unknown_ret KillVRTheaterPancakeGame(void*) = 0;
    virtual unknown_ret BIsAnyGameOrServiceAppRunning() = 0;
    virtual unknown_ret BGetAppPlaytimeMap(void*) = 0;
    virtual unknown_ret BGetAppsLastPlayedMap(void*) = 0;
    virtual unknown_ret BGetAppTagsMap(void*) = 0;
    virtual unknown_ret SendSteamServiceStatusUpdate(void*,void*) = 0;
    virtual unknown_ret RequestSteamGroupChatMessageNotifications(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret RequestSteamGroupChatMessageHistory(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret RequestSendSteamGroupChatMessage(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret OnNewGroupChatMsgAdded(void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret OnGroupChatUserStateChange(void*,void*,void*,void*) = 0;
    virtual unknown_ret OnReceivedGroupChatSubscriptionResponse(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret GetTimedTrialStatus(void*,void*,void*) = 0;
    virtual unknown_ret RequestTimedTrialStatus(void*) = 0;
    virtual unknown_ret PrepareForSystemSuspend() = 0;
    virtual unknown_ret ResumeSuspendedGames(void*) = 0;
    virtual unknown_ret GetClientInstallationID() = 0;
    virtual unknown_ret Test_SetClientInstallationID(void*,void*) = 0;
    virtual unknown_ret GetAppIDForGameID(void*) = 0;
    virtual unknown_ret BDoNotDisturb() = 0;
};
