
//
// TokensColor.h
//
// Do not edit directly
// Generated on Thu, 27 May 2021 11:05:05 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, TokensColorName) {
ColorPrimary500,
ColorPrimary400,
ColorPrimary300,
ColorRichard,
ColorPrimary100,
ColorPrimary200,
ColorNeutral900,
ColorNeutral800,
ColorNeutral700,
ColorNeutral600,
ColorNeutral500,
ColorNeutral400,
ColorNeutral300,
ColorNeutral200,
ColorNeutral100,
ColorErrorDark,
ColorWarningDark,
ColorHighlightDark,
ColorSuccessDark,
ColorErrorLight,
ColorWarningLight,
ColorHighlightLight,
ColorSuccessLight,
ColorMetroBlue,
ColorMetroGreen,
ColorMetroRed,
ColorBusLight,
ColorBusDark,
ColorTramLidingobanan,
ColorTramNockebybanan,
ColorTramRoslagsbanan,
ColorTramSaltsjobanan,
ColorTramSparvagcity,
ColorTramTvarbanan,
ColorRailPendeltag,
ColorBoat
};

@interface TokensColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(TokensColorName)color;
@end
