
//
// TokensColor.m
//
// Do not edit directly
// Generated on Wed, 26 May 2021 08:06:42 GMT
//

#import "TokensColor.h"


@implementation TokensColor

+ (UIColor *)color:(TokensColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[

    ];
  });

  return colorArray;
}

@end
