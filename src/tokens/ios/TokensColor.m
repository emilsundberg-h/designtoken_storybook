
//
// TokensColor.m
//
// Do not edit directly
// Generated on Sun, 09 May 2021 06:12:25 GMT
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
