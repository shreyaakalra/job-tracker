"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-black">
            Login to your Account
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        
        <form className="space-y-4">
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                        Email
                    </Label>
                    <Input 
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700">
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        required
                        minLength={8}
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 mt-4"
                >
                    Sign in
                </Button>
                <p className="text-center text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link 
                  href="/sign-up"
                  className="font-medium text-sm text-primary hover:underline"
                  >
                  Sign Up
                  </Link>
                </p>
                    
               
            </CardFooter>
        </form>
       
      </Card>
    </div>
  );
}
