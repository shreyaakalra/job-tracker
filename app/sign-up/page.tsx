"use client"
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function SignUp(){
    return(
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>
                        Login to your Account
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to login to you account
                    </CardDescription>
                    <CardAction>
                        <Button variant="link">Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">
                                    Email
                                </Label>
                                <Input 
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}