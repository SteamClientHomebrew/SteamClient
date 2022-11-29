class IClientGameServerInternalMap
{
public:
    virtual unknown_ret Unknown_5313840() = 0;
    virtual unknown_ret Unknown_5313760() = 0;
    virtual unknown_ret SetSDRLogin(void*) = 0;
    virtual unknown_ret Unknown_4878336() = 0;
    virtual unknown_ret InitGameServerSerialized(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret SetProduct(void*) = 0;
    virtual unknown_ret SetGameDescription(void*) = 0;
    virtual unknown_ret SetModDir(void*) = 0;
    virtual unknown_ret SetDedicatedServer(void*) = 0;
    virtual unknown_ret LogOn(void*) = 0;
    virtual unknown_ret LogOnAnonymous() = 0;
    virtual unknown_ret LogOff() = 0;
    virtual unknown_ret GetSteamID(void*) = 0;
    virtual unknown_ret BLoggedOn() = 0;
    virtual unknown_ret BSecure() = 0;
    virtual unknown_ret WasRestartRequested() = 0;
    virtual unknown_ret SetMaxPlayerCount(void*) = 0;
    virtual unknown_ret SetBotPlayerCount(void*) = 0;
    virtual unknown_ret SetServerName(void*) = 0;
    virtual unknown_ret SetMapName(void*) = 0;
    virtual unknown_ret SetPasswordProtected(void*) = 0;
    virtual unknown_ret SetSpectatorPort(void*) = 0;
    virtual unknown_ret SetSpectatorServerName(void*) = 0;
    virtual unknown_ret ClearAllKeyValues() = 0;
    virtual unknown_ret SetKeyValue(void*,void*) = 0;
    virtual unknown_ret SetGameTags(void*) = 0;
    virtual unknown_ret SetGameData(void*) = 0;
    virtual unknown_ret SetRegion(void*) = 0;
    virtual unknown_ret SendUserConnectAndAuthenticate(void*,void*,void*,void*) = 0;
    virtual unknown_ret CreateUnauthenticatedUserConnection(void*) = 0;
    virtual unknown_ret SendUserDisconnect(void*,void*) = 0;
    virtual unknown_ret BUpdateUserData(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetAuthSessionTicket(void*,void*,void*) = 0;
    virtual unknown_ret GetAuthSessionTicketV2(void*,void*,void*,void*) = 0;
    virtual unknown_ret BeginAuthSession(void*,void*,void*,void*) = 0;
    virtual unknown_ret EndAuthSession(void*,void*) = 0;
    virtual unknown_ret CancelAuthTicket(void*) = 0;
    virtual unknown_ret IsUserSubscribedAppInTicket(void*,void*,void*) = 0;
    virtual unknown_ret RequestUserGroupStatus(void*,void*,void*,void*) = 0;
    virtual unknown_ret GetGameplayStats() = 0;
    virtual unknown_ret GetServerReputation() = 0;
    virtual unknown_ret GetPublicIP(void*) = 0;
    virtual unknown_ret EnableHeartbeats(void*) = 0;
    virtual unknown_ret SetHeartbeatInterval(void*) = 0;
    virtual unknown_ret ForceHeartbeat() = 0;
    virtual unknown_ret GetLogonState() = 0;
    virtual unknown_ret BConnected() = 0;
    virtual unknown_ret RaiseConnectionPriority(void*) = 0;
    virtual unknown_ret ResetConnectionPriority(void*) = 0;
    virtual unknown_ret SetCellID(void*) = 0;
    virtual unknown_ret TrackSteamUsageEvent(void*,void*,void*) = 0;
    virtual unknown_ret SetCountOfSimultaneousGuestUsersPerSteamAccount(void*) = 0;
    virtual unknown_ret EnumerateConnectedUsers(void*,void*) = 0;
    virtual unknown_ret AssociateWithClan(void*,void*) = 0;
    virtual unknown_ret ComputeNewPlayerCompatibility(void*,void*) = 0;
    virtual unknown_ret _BGetUserAchievementStatus(void*,void*,void*) = 0;
    virtual unknown_ret _GSSetSpawnCount(void*) = 0;
    virtual unknown_ret _GSGetSteam2GetEncryptionKeyToSendToNewClient(void*,void*,void*) = 0;
    virtual unknown_ret _GSSendSteam2UserConnect(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret _GSSendSteam3UserConnect(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret _GSSendUserConnect(void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret _GSRemoveUserConnect(void*) = 0;
    virtual unknown_ret _GSUpdateStatus(void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret _GSCreateUnauthenticatedUser(void*) = 0;
    virtual unknown_ret _GSSetServerType(void*,void*,void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret _SetBasicServerData(void*,void*,void*,void*,void*,void*,void*) = 0;
    virtual unknown_ret _GSSendUserDisconnect(void*,void*,void*) = 0;
};
