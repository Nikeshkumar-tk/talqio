import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { IconRobot } from "@tabler/icons-react"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <IconRobot className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">Join TalqBot</h1>
        <p className="text-muted-foreground text-lg">Start building intelligent chatbots in minutes</p>
      </div>
      
      <Card className="max-w-2xl mx-auto w-full">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription className="text-base">
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  className="h-11"
                />
              </div>
            </div>
            
            {/* Email and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company <span className="text-muted-foreground">(Optional)</span></Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  className="h-11"
                />
              </div>
            </div>
            
            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Create password"
                  required 
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  placeholder="Confirm password"
                  required 
                  className="h-11"
                />
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox id="terms" required className="mt-1" />
              <Label htmlFor="terms" className="text-sm leading-6">
                I agree to the{" "}
                <a href="#" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Privacy Policy
                </a>
              </Label>
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <Button type="submit" className="h-11 w-full">
                Create Account
              </Button>
              <Button variant="outline" className="h-11 w-full">
                Continue with Google
              </Button>
            </div>
            
            {/* Sign In Link */}
            <div className="text-center pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <a href="/login" className="text-primary underline underline-offset-4 hover:text-primary/80 font-medium">
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}