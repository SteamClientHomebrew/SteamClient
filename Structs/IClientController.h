class IClientController
{
public:
    virtual unknown_ret ~CSteamController() = 0;
    virtual unknown_ret ~CSteamController() = 0;
    virtual unknown_ret Init(bool, IClientControllerSerialized*, unsigned int) = 0;
    virtual unknown_ret Shutdown() = 0;
    virtual unknown_ret RunFrame() = 0;
    virtual unknown_ret GetAllControllersStatus(ControllersStatus_t*) = 0;
    virtual unknown_ret GetControllerState(unsigned int, SteamControllerStateInternal_t*) = 0;
    virtual unknown_ret GetControllerStatusEvent(unsigned int, Voltroller::SteamControllerStatusEvent_t*) = 0;
    virtual unknown_ret TriggerHapticPulse(unsigned int, ESteamControllerPad, unsigned short, unsigned short, unsigned short, unsigned int) = 0;
    virtual unknown_ret IsControllerConnected(unsigned int, bool) = 0;
    virtual unknown_ret GetConnectedControllers(unsigned long long*) = 0;
    virtual unknown_ret GetConnectedControllers(unsigned int, unsigned long long*) = 0;
    virtual unknown_ret GetDigitalActionData(unsigned int, unsigned long long, unsigned long long) = 0;
    virtual unknown_ret GetAnalogActionData(unsigned int, unsigned long long, unsigned long long) = 0;
    virtual unknown_ret ActivateActionSet(unsigned int, unsigned long long, unsigned long long) = 0;
    virtual unknown_ret GetCurrentActionSet(unsigned long long) = 0;
    virtual unknown_ret ActivateActionSetLayer(unsigned int, unsigned long long, unsigned long long) = 0;
    virtual unknown_ret DeactivateActionSetLayer(unsigned int, unsigned long long, unsigned long long) = 0;
    virtual unknown_ret DeactivateAllActionSetLayers(unsigned int, unsigned long long) = 0;
    virtual unknown_ret GetActiveActionSetLayers(unsigned int, unsigned long long, unsigned long long*) = 0;
    virtual unknown_ret ShowBindingPanel(unsigned int, unsigned long long) = 0;
    virtual unknown_ret GetControllerTypeForHandle(unsigned long long) = 0;
    virtual unknown_ret GetGamepadIndexForHandle(unsigned long long) = 0;
    virtual unknown_ret GetGamepadIndexForControllerIndex(unsigned int) = 0;
    virtual unknown_ret GetHandleForGamepadIndex(int) = 0;
    virtual unknown_ret GetDigitalActionHandle(unsigned int, char const*) = 0;
    virtual unknown_ret GetAnalogActionHandle(unsigned int, char const*) = 0;
    virtual unknown_ret GetDigitalActionOrigins(unsigned int, unsigned long long, unsigned long long, unsigned long long, EControllerActionOrigin*) = 0;
    virtual unknown_ret GetDigitalActionOrigins(unsigned int, unsigned long long, unsigned long long, unsigned long long, EInputActionOrigin*) = 0;
    virtual unknown_ret GetAnalogActionOrigins(unsigned int, unsigned long long, unsigned long long, unsigned long long, EControllerActionOrigin*) = 0;
    virtual unknown_ret GetAnalogActionOrigins(unsigned int, unsigned long long, unsigned long long, unsigned long long, EInputActionOrigin*) = 0;
    virtual unknown_ret GetDigitalActionOrigins_Legacy(unsigned int, unsigned long long, unsigned long long, unsigned long long, EControllerActionOrigin*) = 0;
    virtual unknown_ret GetAnalogActionOrigins_Legacy(unsigned int, unsigned long long, unsigned long long, unsigned long long, EControllerActionOrigin*) = 0;
    virtual unknown_ret GetCachedDigitalActionHandle(char const*) = 0;
    virtual unknown_ret CacheDigitalActionHandle(char const*, unsigned long long) = 0;
    virtual unknown_ret GetCachedAnalogActionHandle(char const*) = 0;
    virtual unknown_ret CacheAnalogActionHandle(char const*, unsigned long long) = 0;
    virtual unknown_ret GetCachedActionSetHandle(char const*) = 0;
    virtual unknown_ret CacheActionSetHandle(char const*, unsigned long long) = 0;
    virtual unknown_ret TriggerHapticPulseOnHandle(unsigned long long, ESteamControllerPad, unsigned short) = 0;
    virtual unknown_ret TriggerRepeatedHapticPulseOnHandle(unsigned long long, ESteamControllerPad, unsigned short, unsigned short, unsigned short, unsigned int) = 0;
    virtual unknown_ret TriggerVibrationOnHandle(unsigned int, unsigned long long, unsigned short, unsigned short) = 0;
    virtual unknown_ret TriggerVibrationExtendedOnHandle(unsigned int, unsigned long long, unsigned short, unsigned short, unsigned short, unsigned short) = 0;
    virtual unknown_ret SetLEDColorOnHandle(unsigned int, unsigned long long, unsigned char, unsigned char, unsigned char, unsigned int) = 0;
    virtual unknown_ret HasGameMapping(unsigned int) = 0;
    virtual unknown_ret FindControllerByAPIHandle(unsigned long long) = 0;
    virtual unknown_ret GetGlyphForActionOrigin(EControllerActionOrigin) = 0;
    virtual unknown_ret GetGlyphForXboxOrigin(EXboxOrigin) = 0;
    virtual unknown_ret GetStringForActionOrigin(EControllerActionOrigin) = 0;
    virtual unknown_ret GetStringForXboxOrigin(EXboxOrigin) = 0;
    virtual unknown_ret GetActionOriginFromXboxOrigin(unsigned long long, EXboxOrigin) = 0;
    virtual unknown_ret TranslateActionOrigin(ESteamInputType, EControllerActionOrigin) = 0;
    virtual unknown_ret GetControllerTypeFromOrigin(EControllerActionOrigin) = 0;
    virtual unknown_ret GetInputTypeForHandle(unsigned long long, int) = 0;
    virtual unknown_ret TranslateSteamInputOriginToSteamControllerOrigin(EInputActionOrigin) = 0;
    virtual unknown_ret TranslateSteamControllerOriginToSteamInputOrigin(EControllerActionOrigin) = 0;
    virtual unknown_ret GetMotionData(unsigned long long) = 0;
    virtual unknown_ret GetMotionDataDisabled(unsigned int, unsigned long long) = 0;
    virtual unknown_ret GetCurrentFocusedAppID(unsigned long long) = 0;
    virtual unknown_ret GetStickExtents(unsigned int, int, short*, short*, short*, short*) = 0;
    virtual unknown_ret GetControllerBindingRevision(unsigned int, unsigned long long, int*, int*) = 0;
    virtual unknown_ret GetRemotePlaySessionID(unsigned long long) = 0;
    virtual unknown_ret CursorVisibilityChanged(bool) = 0;
    virtual unknown_ret SetInputGenerated(bool, int) = 0;
    virtual unknown_ret GetControllerVirtualCursor(unsigned int, GroupId, ControllerAnalogCursorData_t*) = 0;
    virtual unknown_ret UpdateControllerVirtualCursor() = 0;
    virtual unknown_ret Validate(CValidator&, char const*) = 0;
    virtual unknown_ret GetNumConnectedControllers() = 0;
    virtual unknown_ret GetControllerDetails(unsigned int) = 0;
    virtual unknown_ret FactoryReset(unsigned int) = 0;
    virtual unknown_ret SetDefaultConfig(unsigned int) = 0;
    virtual unknown_ret CalibrateTrackpads(unsigned int) = 0;
    virtual unknown_ret CalibrateJoystick(unsigned int) = 0;
    virtual unknown_ret CalibrateIMU(unsigned int) = 0;
    virtual unknown_ret SetAudioMapping(unsigned int, CUtlVector<signed char, CUtlMemory<signed char> >*) = 0;
    virtual unknown_ret PlayAudio(unsigned int, unsigned int) = 0;
    virtual unknown_ret SetUserLedColor(unsigned int, unsigned char, unsigned char, unsigned char) = 0;
    virtual unknown_ret SetStickExtents(unsigned int, int, short, short, short, short) = 0;
    virtual unknown_ret ResetStickExtents(unsigned int) = 0;
    virtual unknown_ret SetRumble(unsigned int, int, int, unsigned short, unsigned short) = 0;
    virtual unknown_ret SetRumbleExtended(unsigned int, int, int, unsigned short, unsigned short, unsigned short, unsigned short) = 0;
    virtual unknown_ret SendIRCode(unsigned int, int, bool, unsigned int) = 0;
    virtual unknown_ret StopIRCode(unsigned int) = 0;
    virtual unknown_ret InvalidateBindingCache() = 0;
    virtual unknown_ret InvalidateBindingCacheForApp(unsigned int) = 0;
    virtual unknown_ret LoadConfigFromVDFString(unsigned int, char const*, unsigned int, SteamControllerAppSettings_t) = 0;
    virtual unknown_ret ActivateConfig(unsigned int, unsigned int) = 0;
    virtual unknown_ret WarmOptInStatus(unsigned int, unsigned int) = 0;
    virtual unknown_ret BIsStreamingController(unsigned int) = 0;
    virtual unknown_ret GetControllerEnableSupport(unsigned int) = 0;
    virtual unknown_ret BAllowAppConfigForController(unsigned int, unsigned int) = 0;
    virtual unknown_ret ResetControllerEnableCache() = 0;
    virtual unknown_ret BShouldShowThirdPartyRemapperWarning(unsigned int) = 0;
    virtual unknown_ret BInputGenerated() = 0;
    virtual unknown_ret GetCurrentActionSetHandleForRunningApp(unsigned int, unsigned int) = 0;
    virtual unknown_ret CreateBindingInstanceFromVDFString(CControllerMappingCreateData const*) = 0;
    virtual unknown_ret FreeBindingInstance(unsigned int) = 0;
    virtual unknown_ret ConvertBindingToNewControllerType(unsigned int, unsigned int) = 0;
    virtual unknown_ret IsModified(unsigned int) = 0;
    virtual unknown_ret ClearModified(unsigned int) = 0;
    virtual unknown_ret GetBindingVDFString(unsigned int) = 0;
    virtual unknown_ret GetLocalizationTokenCount(unsigned int) = 0;
    virtual unknown_ret GetLocalizationToken(unsigned int, int, CUtlString*) = 0;
    virtual unknown_ret GetLocalizedString(unsigned int, char const*) = 0;
    virtual unknown_ret GetSourceGroupBindingCount(unsigned int, EControllerSource) = 0;
    virtual unknown_ret GetSourceGroupBindingInfo(unsigned int, EControllerSource, int, SetId, SourceGroupBindingInfo_t*) = 0;
    virtual unknown_ret SetSourceGroupBindingActive(unsigned int, EControllerSource, GroupId, bool, SetId, GameActionGid) = 0;
    virtual unknown_ret CreateSourceGroupBinding(unsigned int, EControllerSource, EControllerSourceMode, bool, PresetId) = 0;
    virtual unknown_ret BAreLayerAndParentModesEquivalent(unsigned int, LayerAGroupId, GroupId) = 0;
    virtual unknown_ret GetGroupSetting(unsigned int, GroupId, EControllerSetting, int*) = 0;
    virtual unknown_ret SetGroupSetting(unsigned int, GroupId, EControllerSetting, int) = 0;
    virtual unknown_ret GetGroupSettingDefault(unsigned int, GroupId, EControllerSetting, int*) = 0;
    virtual unknown_ret GetGroupSettingUIRange(unsigned int, GroupId, EControllerSetting, int*, int*) = 0;
    virtual unknown_ret SetGroupBinding(unsigned int, GroupId, EControllerModeInput, ActivatorId, BindingAction_t*, char const*, IconBindingData_t*) = 0;
    virtual unknown_ret GetGroupBinding(unsigned int, GroupId, EControllerModeInput, ActivatorId, CUtlVector<BindingAction_t, CUtlMemory<BindingAction_t> >*, CUtlString*, IconBindingData_t*) = 0;
    virtual unknown_ret RemoveGroupBinding(unsigned int, GroupId, EControllerModeInput, ActivatorId) = 0;
    virtual unknown_ret GetActivatorSetting(unsigned int, GroupId, EControllerModeInput, ActivatorId, EControllerSetting, int*) = 0;
    virtual unknown_ret SetActivatorSetting(unsigned int, GroupId, EControllerModeInput, ActivatorId, EControllerSetting, int) = 0;
    virtual unknown_ret GetActivatorSettingDefault(unsigned int, GroupId, EControllerModeInput, ActivatorId, EControllerSetting, int*) = 0;
    virtual unknown_ret GetParentGroupForLayerGroup(unsigned int, GroupId) = 0;
    virtual unknown_ret GetParentPresetForLayerPreset(unsigned int, LayerAPresetId) = 0;
    virtual unknown_ret GetGroupActivatorsForInput(unsigned int, GroupId, EControllerModeInput, CUtlVector<ActivatorInfo_t, CUtlMemory<ActivatorInfo_t> >*) = 0;
    virtual unknown_ret ReplaceActivator(unsigned int, GroupId, EControllerModeInput, ActivatorId, EControllerActivationType) = 0;
    virtual unknown_ret AddActivator(unsigned int, GroupId, EControllerModeInput) = 0;
    virtual unknown_ret RemoveActivator(unsigned int, GroupId, EControllerModeInput, ActivatorId) = 0;
    virtual unknown_ret CopyActivator(unsigned int, GroupId, GroupId, EControllerModeInput, ActivatorId) = 0;
    virtual unknown_ret IsActivatorSettingsDefault(unsigned int, GroupId, EControllerModeInput, ActivatorId) = 0;
    virtual unknown_ret SetModeShiftBinding(unsigned int, Voltroller::DigitalIO, PresetId, BindingAction_t*, char const*) = 0;
    virtual unknown_ret GetModeShiftBinding(unsigned int, Voltroller::DigitalIO, EControllerSource, PresetId, BindingAction_t*, CUtlString*) = 0;
    virtual unknown_ret GetGameActionSets(unsigned int, CUtlVector<CGameActionSet*, CUtlMemory<CGameActionSet*> >*) = 0;
    virtual unknown_ret GetBaseGameActionSets(unsigned int, CUtlVector<CBaseGameActionSet*, CUtlMemory<CBaseGameActionSet*> >*) = 0;
    virtual unknown_ret GetLayerGameActionSets(unsigned int, CUtlVector<CLayerGameActionSet*, CUtlMemory<CLayerGameActionSet*> >*) = 0;
    virtual unknown_ret GetGameActionSetById(unsigned int, ASetId) = 0;
    virtual unknown_ret AddActionSet(unsigned int, CGameActionSet*) = 0;
    virtual unknown_ret DeleteActionSet(unsigned int, CGameActionSet*) = 0;
    virtual unknown_ret RenameActionSet(unsigned int, CGameActionSet*) = 0;
    virtual unknown_ret GetBindingSetting(unsigned int, EControllerSetting, int*) = 0;
    virtual unknown_ret SetBindingSetting(unsigned int, EControllerSetting, int) = 0;
    virtual unknown_ret GetBindingTitle(unsigned int, bool) = 0;
    virtual unknown_ret SetBindingTitle(unsigned int, char const*) = 0;
    virtual unknown_ret GetBindingDescription(unsigned int, bool) = 0;
    virtual unknown_ret GetBindingRevision(unsigned int, int*, int*) = 0;
    virtual unknown_ret BBindingMajorRevisionMismatch(unsigned int) = 0;
    virtual unknown_ret SetBindingDescription(unsigned int, char const*) = 0;
    virtual unknown_ret SetBindingControllerType(unsigned int, EControllerType) = 0;
    virtual unknown_ret GetBindingControllerType(unsigned int) = 0;
    virtual unknown_ret GetBindingCreator(unsigned int) = 0;
    virtual unknown_ret SetBindingCreator(unsigned int, unsigned long long) = 0;
    virtual unknown_ret GetConfigFeatures(unsigned int, CUtlVector<EControllerConfigFeature, CUtlMemory<EControllerConfigFeature> >*) = 0;
    virtual unknown_ret GetAllBindings(unsigned int, CUtlVector<BindingAction_t, CUtlMemory<BindingAction_t> >*, CUtlVector<CUtlString, CUtlMemory<CUtlString> >*) = 0;
    virtual unknown_ret TriggerVibration(unsigned int, unsigned short, unsigned short) = 0;
    virtual unknown_ret TriggerVibrationExtended(unsigned int, unsigned short, unsigned short, unsigned short, unsigned short) = 0;
    virtual unknown_ret SetLEDColor(unsigned int, unsigned char, unsigned char, unsigned char, unsigned int) = 0;
    virtual unknown_ret SetDonglePairingMode(bool, int) = 0;
    virtual unknown_ret SetControllerPairingConnectionState(unsigned int, bool) = 0;
    virtual unknown_ret SetControllerKeyboardMouseState(unsigned int, bool) = 0;
    virtual unknown_ret SetLocalControllerConnectionState(unsigned int, EControllerConnectionState) = 0;
    virtual unknown_ret ReserveSteamController() = 0;
    virtual unknown_ret CancelSteamControllerReservations() = 0;
    virtual unknown_ret OpenStreamingSession(unsigned int, unsigned int) = 0;
    virtual unknown_ret CloseStreamingSession(unsigned int, unsigned int) = 0;
    virtual unknown_ret InitiateBootloaderFirmwareUpdate(unsigned int) = 0;
    virtual unknown_ret InitiateISPFirmwareUpdate(unsigned int) = 0;
    virtual unknown_ret FlashControllerFirmware(unsigned int, CUtlBuffer*, unsigned int, char const*) = 0;
    virtual unknown_ret TurnOffController(unsigned int) = 0;
    virtual unknown_ret SetGyroOn(unsigned int, unsigned long long) = 0;
    virtual unknown_ret SetControllerSetting(unsigned int, Voltroller::ControllerSetting*) = 0;
    virtual unknown_ret EnumerateControllers() = 0;
    virtual unknown_ret StartConfigSets(unsigned int, unsigned int, bool) = 0;
    virtual unknown_ret AddConfigSet(char const*, unsigned long long, char const*) = 0;
    virtual unknown_ret FinishConfigSets(unsigned int) = 0;
    virtual unknown_ret BControllerHasUniqueConfigForAppID(unsigned int, CUtlString*) = 0;
    virtual unknown_ret DeRegisterController(unsigned int, unsigned int) = 0;
    virtual unknown_ret SetPersonalizationFile(unsigned int, unsigned int, unsigned long long) = 0;
    virtual unknown_ret GetPersonalizationFileID(unsigned int) = 0;
    virtual unknown_ret LoadControllerPersonalizationFile(unsigned int, char const*, bool, bool) = 0;
    virtual unknown_ret SaveControllerPersonalizationFile(unsigned int, unsigned int, ControllerIdentity_t*) = 0;
    virtual unknown_ret BGetTouchConfigData(unsigned int, unsigned int, unsigned long long*, unsigned int*, CUtlBuffer*, CUtlBuffer*) = 0;
    virtual unknown_ret BSaveTouchConfigLayout(unsigned int, unsigned int, CUtlBuffer const*) = 0;
    virtual unknown_ret BAnyControllerOptedInAndAvailible(unsigned int) = 0;
    virtual unknown_ret GetTouchKeysForPopupMenu(unsigned int, unsigned int, PopupMenuTouchKey_t*, unsigned int) = 0;
    virtual unknown_ret PopupMenuTouchKeyClicked(unsigned int, unsigned int, unsigned int) = 0;
    virtual unknown_ret CheckMappingForEvents() = 0;
    virtual unknown_ret AccessControllerInputGeneratorMouseButton(unsigned int, Voltroller::MouseButtons, bool) = 0;
    virtual unknown_ret GetEmulatedOutputState() = 0;
    virtual unknown_ret DeactivateActionSetLayer(unsigned int, unsigned long long, LayerASetId) = 0;
    virtual unknown_ret GetActionSetHandle(unsigned int, char const*) = 0;
    virtual unknown_ret GetActionSetHandleByTitle(unsigned int, char const*) = 0;
    virtual unknown_ret StopAnalogActionMomentum(unsigned long long, unsigned long long) = 0;
    virtual unknown_ret StartTrackingCallback(unsigned int, unsigned long long) = 0;
    virtual unknown_ret GetControllerUsageData(unsigned int) = 0;
};
